/**
 * @file modules/socket/main.js
 * @project mobnius-kes-node
 * @author Александр
 */

/**
 * Настройки shell RPC
 * @type {any}
 */
var options = null;

/**
 * объект для socket.io
 */
var io = null;

var authUtil = require('../authorize/util');

var join = require('path').join;
var conf = require('node-config')(join(__dirname, '../', '../'));
var rpcHandler = require('./rpc-handler');
var synchronizationHandler = require('./synchronization-handler');
var uploadHandler = require('./upload-handler');
var downloadHandler = require('./download-handler');
var connectionStack = require('./connection-stack');
var logjs = require('../log');
var redis = require('socket.io-redis');
var socketUtils = require('./utils');

/**
 * инициализация
 * @param {any} opts дополнительные опции
 * @example
 * // формат возвращаения данных
 * 
 * // Вывод статуса выволнения команды
 * callback({
 *      meta:{
 *          processed: false,
 *          status: 'текст'
 *      }
 * });
 * 
 * //Команда завершилась с ошибкой
 * callback({
 *      meta:{
 *          processed: true, // значит команда завершена
 *          status: 'текст'
 *      },
 *      data: {
 *          success: false,
 *          msg: 'текст ошибки'
 *      }
 * });
 * //Команда завершена
 * callback({
 *      meta:{
 *          processed: true, // значит команда завершена
 *          status: ''
 *      },
 *      data: {
 *          success: true,
 *          msg: ''
 *      }
 * });
 */
exports.init = function (opts) {
    options = opts;
}

/**
 * обработчик для socket.io
 * @param {any} io_obj подключение
 */
exports.on = function (io_obj) {
    io = io_obj;
    if (conf.get('redis_host')) {
        io.adapter(redis({ host: conf.get('redis_host'), port: 6379 }));
    }

    io.on('connection', function (socket) {
        socket.on('disconnect', function (reason) {
            if (socket.user != null) {
                var userName = connectionStack.remove(socket);
                logjs.debug('Отключено socket-соединение с сервером для ' + (userName ? 'пользователя ' + userName : 'socket ' + (socket.imei || socket.id)) + '. Причина: ' + reason);
            }
        });

        if (socket.handshake.query.token) {
            isAuthorize(socket, function (req, res) {
                if (res.isAuthorize == true) {
                    res.claims = res.user.c_claims.replace(/^./g, '').replace(/.$/g, '').split('.');

                    res.claims.forEach(function (c) {
                        socket.join(c);
                    });

                    var userName = connectionStack.add(socket, res.user, socket.handshake.query.imei);
                    logjs.debug('Подключено socket-соединение с сервером для ' + (userName ? 'пользователя ' + userName : 'socket ' + socket.id) + '.');
                    // тут пользователь авторизован и может работать с socket данными
                    socket.on('rpc', rpcHandler(req, res, socket));
                    socket.on('synchronization', synchronizationHandler(req, res, socket));
                    socket.on('upload', uploadHandler(req, res, socket));
                    socket.on('download', downloadHandler(req, res, socket));

                    // информирование системы о том, что пользователь был зарегистрирован и обработчики настроены
                    socketUtils.registry(socket);
                } else {
                    logjs.debug('Создание socket-подключения не авторизованным пользователем. socket_id=' + (socket.imei || socket.id));
                    socketUtils.noAuth(socket);
                }
            });
        } else {
            connectionStack.add(socket, null, socket.handshake.query.imei);
            logjs.debug('Создание socket-подключения без token.');
            socketUtils.noAuth(socket);
        }
    });
}

/**
 * проверка авторизации
 * @param {*} token токен
 * @param {*} socket 
 * @param {*} callback 
 */
function isAuthorize(socket, callback) {
    var authType = authUtil.getAuthModule(options);
    var func = authType.user(true);
    var res = {};
    var obj = {};
    obj[conf.get('authorization_header')] = socket.handshake.query.token;
    var req = {
        headers: Object.assign({
            "user-agent": socket.request.headers["user-agent"]
        }, obj),
        ip: socket.request.connection.remoteAddress,
        socketId: socket.id
    };
    func(req, res, function () {
        callback(req, res);
    });
}