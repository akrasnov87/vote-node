/**
 * @file modules/synchronization/v1.js
 * @project mobnius-kes-node
 * @author Александр
 */

var packager = require('mobnius-packager');
var handler = require('../rpc/modules/rpc-handler');
var logjs = require('../log');

/**
 * Тестирование синхронизации. Выполнение происходит только при тестировании механизма синхрнизации на телефоне. Версия протокола v0
 * @param {*} res 
 * @param {*} req 
 * @param {any[]} bytes массив байтов
 * @param {function} callback функция обратного вызова
 */
module.exports = function (req, res, bytes, callback) {
    try {
        var pkgRead = packager.read(bytes);
        var meta = pkgRead.meta;
        var toResult = [];
        var fromResult = [];
        logjs.debug('Пакет ' + meta.id + ' принят от пользователя ' + res.user.c_login);
        if (pkgRead.attachments) {
            req.attachments = pkgRead.attachments;
            var attachmentCount = 0;
            for (var i in req.attachments) {
                attachmentCount++;
            }
            if (attachmentCount > 0) {
                logjs.debug('В пакете ' + meta.id + ' принятым от пользователя ' + res.user.c_login + ' содержится ' + attachmentCount + ' вложений.');
            }
        }

        req.tid = meta.id;
        var dt = Date.now();

        if (pkgRead.data.to) {
            req.body = pkgRead.data.to;
            socketSend('PROCESSING_TO', meta.id);
            handler(req, res, function (results) {
                toResult = results;
                logjs.debug('Блок TO, пакет ' + meta.id + ' от пользователя ' + res.user.c_login + ', был обработан за ' + ((Date.now() - dt) / 1000) + ' секунд.');
                if (pkgRead.data.from) {
                    socketSend('PROCESSING_FROM', meta.id);
                    req.body = pkgRead.data.from;
                    handler(req, res, function (results) {
                        logjs.debug('Блок FROM, пакет ' + meta.id + ' от пользователя ' + res.user.c_login + ', был обработан за ' + ((Date.now() - dt) / 1000) + ' секунд.');
                        fromResult = results;
                        createPkg();
                    });
                } else {
                    createPkg();
                }
            });
        } else {
            if (pkgRead.data.from) {
                socketSend('PROCESSING_FROM', meta.id);
                req.body = pkgRead.data.from;
                handler(req, res, function (results) {
                    logjs.debug('Блок FROM, пакет ' + meta.id + ' от пользователя ' + res.user.c_login + ', был обработан за ' + ((Date.now() - dt) / 1000) + ' секунд.');
                    fromResult = results;
                    createPkg();
                });
            }
        }

        function createPkg() {
            var attachments = res.attachments;
            socketSend('PROCESSING_CREATE_PACKAGE', meta.id);
            var pkg = packager.write();
            pkg.meta(meta.transaction, meta.dataInfo, meta.version, meta.id);
            pkg.block('to', toResult);
            pkg.block('from', fromResult);
            if (attachments) {
                for (var i in attachments) {
                    var attachment = attachments[i];
                    if (attachment.buffer) {
                        pkg.attachment(attachment.name, attachment.link, attachment.buffer);
                    }
                }
            }
            logjs.debug('Пакет ' + meta.id + ' от пользователя ' + res.user.c_login + ' был обработан за ' + ((Date.now() - dt) / 1000) + ' секунд.');
            callback(200, pkg.flush(0, pkgRead.type));
        }

        function socketSend(message, tid) {
            if (req.socket) {
                req.socket.emit('synchronization-status', {
                    meta: {
                        processed: true
                    },
                    data: {
                        success: true,
                        msg: ''
                    },
                    result: message + " TID=" + tid + "; TIME=" + (Date.now() - dt),
                    code: 200,
                    tid: tid
                });
            }
        }
    } catch (e) {
        var message = "Ошибка чтения пакета." + e.stack.toString();
        logjs.error(message);
        callback(500, Buffer.from(message, 'utf-8'));
    }
}