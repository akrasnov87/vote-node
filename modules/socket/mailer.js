var userCollection = require('./connection-stack');
var logjs = require('../log');
var packager = require('mobnius-packager');

/**
 * Отправка письма
 * @param {any} socket соединение
 * @param {Buffer} buffer данные
 */
exports.to = to;

function to (socket, buffer) {
    var pkgRead = packager.read(buffer);
    var data = pkgRead.data;

    if(data.mTo) {
        var users = userCollection.getUsers(data.mTo);
        if (users.length > 0) {
            logjs.debug('Отправка ' + users.length + ' клиенту(ам) с идентификаторами ' + data.mTo + ' от ' + data.mFrom);
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                socket.emit('mailer-from', packager.updateStatus(buffer, '1'));
                user.emit('mailer-from', buffer);
            }
        } else {
            if (socket != null) {
                logjs.debug('Получатель ' + data.mTo + ' не найден. Отправитель ' + data.mFrom);
                socket.emit('mailer-from', packager.updateStatus(buffer, '8'));
            }
        }
    }

    if(data.mGroup) {
        logjs.debug('Отправка группе ' + data.mGroup + ' от ' + data.mFrom);
        socket.broadcast.to(data.mGroup).emit('mailer-group-from', buffer);
    }
}

/**
 * Отправка текстового сообщения
 * @param socket {any}
 * @param from {string} от кого
 * @param _to {string} кому
 * @param group {string} группе
 */
exports.sendText = function(socket, from, _to, body, group) {
    var pkg = packager.write();
    pkg.meta(false, 'mail', 'v1', Date.now().toString());
    pkg.block({'mBody': body, 'mTo': _to, 'mFrom': from, 'mGroup': group });
    to(socket, pkg.flush(0, 'NML'));
}