/**
 * @file modules/custom-context/user.js
 * @project mobnius-kes-node
 * @author Александр
 */

/**
 * объект для формирования ответа
 */
var result_layout = require('mobnius-pg-dbcontext/modules/result-layout');
var db = require('../dbcontext');
var salt = require('../authorize/saltHash');

/**
 * Объект с набором RPC функций
 */
exports.user = function (session) {

    return {
        isLocal: true, // нужно указывать, иначе безопасность при создании meta не пропустит

        /**
         * получение информации о пользователе
         * @param {*} data 
         * @param {*} callback
         * @example
         * PN.user.getUser({}, function(){});
         */
        getUser: function (data, callback) {
            if (session.isAuthorize == true) {
                db.pv_users().Query({
                    filter: [{
                        property: 'id',
                        value: session.user.id
                    }]
                }, function (result) {
                    if (result.meta.success == true) {
                        var items = result.result.records;
                        if (items.length == 1) {
                            var item = items[0];
                            callback(result_layout.ok([item]));
                        } else {
                            callback(result_layout.error(new Error("Информация о пользователе не найдена.")));
                        }
                    } else {
                        callback(result_layout.error(new Error(result.meta.msg)));
                    }
                })
            } else {
                callback(result_layout.error(new Error('Получение профиля по не авторизованному пользователю.')));
            }
        },

        /**
         * обновление пользователя
         * @param {any} data 
         * @param {function} callback  
         * @example
         * // подстановка поля id происходит из авторизации
         * PN.user.updateUser({
         *      address: '' // сюда передаем набор объектов
         * }, function(){});
         */
        updateUser: function (data, callback) {
            if (session.isAuthorize == true) {
                if (result.meta.success == true && result.result.records.length == 1) {
                    delete data.c_password;
                    delete data.s_salt;
                    delete data.s_hash;
                    delete data.c_login;

                    data.id = session.user.id;
                    db.pd_users().Update(data, function (result) {
                        if (result.meta.success == true) {
                            callback(result_layout.ok([]));
                        } else {
                            callback(result_layout.error(new Error(result.meta.msg)));
                        }
                    });
                } else {
                    callback(result_layout.error(new Error("Пользователя не найден.")));
                }
            } else {
                callback(result_layout.error(new Error('Обновление не авторизованным пользователем.')));
            }
        },

        /**
         * Создание пользователя
         * @param {*} data 
         * @param {*} callback 
         * @example
         * // подстановка поля id происходит из авторизации
         * PN.user.createUser({
         *      login: '',
         *      password: '',
         *      claims: 'user.inspector'
         * }, function(){});
         */
        createUser: function (data, callback) {
            if(session.isAuthorize) {
                var currentClaims = session.user.c_claims;
                var login = data.login;
                var password = data.password.toString();
                var claims = data.claims;

                if(login && password && claims) {
                    var mainClaims = currentClaims.split('.')[1];
                    if(mainClaims) {
                        db.pd_roles().Query({ limit:10000, sort: [{property:"n_weight", direction: "DESC"}] }, function(result) {
                            if(result.meta.success) {
                                var roles = result.result.records;
                                var mainClaimWeight = roles.filter(function(role){return role.c_name == mainClaims})[0].n_weight;
                                var createClaims = claims.split('.');
                                var createClaimsWeight = [];
                                for(var idx in createClaims){
                                    var claim = roles.filter(function(role){return role.c_name == createClaims[idx]})[0];
                                    if(claim) {
                                        createClaimsWeight.push(claim);
                                    }
                                }
                                if(createClaimsWeight.filter(function(c) { return c.n_weight <= mainClaimWeight; }).length == createClaimsWeight.length) {
                                    var obj = salt.generate(password);
                                    db.pd_users().Add({ 
                                        c_login: login, 
                                        s_salt: obj.salt, 
                                        s_hash: obj.passwordHash, 
                                        b_disabled: false, 
                                        sn_delete: false 
                                    }, function(result) {
                                        if(result.meta.success) {
                                            var id = result.result.records.rows[0].id;
                                            try {
                                                var addRoles = [];
                                                for(var idx in createClaimsWeight){
                                                    var item = createClaimsWeight[idx];
                                                    if(item) {
                                                        addRoles.push({f_user: id, f_role: item.id, sn_delete: false});
                                                    }
                                                }

                                                db.pd_userinroles().Add(addRoles, function(result) {
                                                    if(result.meta.success) {
                                                        callback(result_layout.ok([{id:id}]));
                                                    } else {
                                                        db.pd_users().Delete({ id: id }, function() {}); // удаляем созданную ранее запись 
                                                        callback(result_layout.error(new Error(result.meta.msg)));
                                                    }
                                                });
                                            } catch(e) {
                                                db.pd_users().Delete({ id: id }, function() {}); // удаляем созданную ранее запись 
                                                callback(result_layout.error(new Error('Ошибка получения идентификатора пользователя.')));
                                            }
                                        } else {
                                            callback(result_layout.error(new Error(result.meta.msg)));
                                        }
                                    });
                                } else {
                                    callback(result_layout.error(new Error('Недостаночно прав на создание пользователя с указанными ролями.')));
                                }
                            } else {
                                callback(result_layout.error(new Error(result.meta.msg)));
                            }
                        });
                    } else {
                        callback(result_layout.error(new Error('Главная роль не найдена.')));
                    }
                } else {
                    callback(result_layout.error(new Error('Одно из обязательных полей равно null.')));
                }
            } else {
                callback(result_layout.error(new Error('Создание не авторизованным пользователем.')));
            }
        }
    }
}