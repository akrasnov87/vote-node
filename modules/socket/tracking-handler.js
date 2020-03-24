/**
 * @file modules/socket/tracking-handler.js
 * @project mobnius-kes-node
 * @author Александр
 * @todo Обработчик трекинга пользователей
 */

var logjs = require('../log');
var mailer = require('./mailer');

/**
 * обработчик трекинга по WebSocket
 * @param {any} req - эмулирование request
 * @param {any} res - эмулирование response
 * @param {any} socket
 */
module.exports = function (in_req, in_res, socket) {
    return function (buffer) {

        mailer.to(socket, buffer);
        var res = Object.assign({}, in_res);
        logjs.debug('Полученны координаты от пользователя ' + res.user.c_login);
    }
}