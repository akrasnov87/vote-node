/**
 * @file modules/socket/network-handler.js
 * @project mobnius-kes-node
 * @author Александр
 * @todo Обработчик сотсояния сети пользователя
 */

var logjs = require('../log');
var utils = require('../utils');

/**
 * обработчик сети по WebSocket
 * @param {any} user пользователь
 * @param {any} io
 * @param {string} status статус
 * @example
 * // socket.on('network', ...)
 * {
 *      userId: number - идентификтаор пользователя
 *      type: string - статус ONLINE | OFFLINE
 * }
 */
module.exports = function (user, io, status) {

    var socketData = utils.socketOkResultLayout({
        userId: user.id,
        type: status,
    });

    io.to('manager').emit('network', socketData);
    logjs.debug('Получен статус сети '+ status +' от пользователя ' + user.c_login + ' в ' + new Date());
}