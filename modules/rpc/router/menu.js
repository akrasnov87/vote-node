/**
 * @file modules/rpc/router/menu.js
 * @project mobnius-kes-node
 * @author Александр
 */

var express = require('express');
var router = express.Router();

var authUtil = require('../../authorize/util');
var db = require('../../dbcontext');


module.exports = function (auth_type) {
    var authType = authUtil.getAuthModule(auth_type);

    router.use('/menu', authType.user(true));
    router.get('/menu/:menuType', get);

    return router;
}

/**
 * GET запрос на получение пунктов меню
 * @param {*} req 
 * @param {*} res 
 * @example
 * GET ~/menu/NAVIGATION
 */
function get(req, res) {
    db.pf_ui_navigations().Query({
        params: {
            user_id: res.user.id,
            menu_type: req.params.menuType
        }
    }, function (data) {
        db.cd_settings().Query({
            filter: [{
                property: 'c_key',
                value: 'home_page'
            }]
        }, function (setting_data) {
            var defaultToken = 'login';
            var settings = setting_data.result.records;
            var navList = data.result.records.filter(function (i) {
                return i.default_token == 1
            });
            if (navList.length > 0) {
                defaultToken = navList[0].view_type;
            } else {
                if (settings.length > 0) {
                    defaultToken = settings[0].value;
                }
            }
            render(data.result.records, res.user.c_claims, defaultToken);
        });
    });
    /**
     * отрисовка меню
     * @param {string} claims роли
     * @param {any[]} records список записей 
     * @param {string} defaultToken страница по умолчанию
     */
    function render(records, claims, defaultToken) {
        res.setHeader('Content-Type', 'application/json');
        res.render(req.params.menuType.toLowerCase(), {
            records: records,
            claims: claims,
            defaultToken: defaultToken,
            itemFilter: function (parent_id, innerItem) {
                return parent_id == innerItem.parent_id;
            }
        });
    }
}