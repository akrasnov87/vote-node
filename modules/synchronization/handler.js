/**
 * @file modules/synchronization/handler.js
 * @project mobnius-kes-node
 * @author Александр
 * @todo обработчик пакетов синхронизаций
 */

var v0 = require('../synchronization/v0');
var v1 = require('../synchronization/v1');
var logjs = require('../log');

module.exports = function (req, res, bytes, versionProtocol, callback) {
    logjs.debug('Пользователем ' + res.user.c_login + ' выполняется обработка синхронизации по протоколу ' + versionProtocol);
    switch (versionProtocol) {
        case 'v0': // применяется только для тестирования
            v0(req, res, bytes, callback);
            break;
        case 'v1':
            v1(req, res, bytes, callback);
            break;
    }
}