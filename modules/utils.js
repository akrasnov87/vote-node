var args = require('args-parser')(process.argv);
var conf = require('node-config')(__dirname, '../');

/**
 * Положительный результат сокет сообщения
 * @param {any} obj данные для передачи
 * @param {string} tid идентификатор. Может быть пустым
 * @returns объект
 */
exports.socketOkResultLayout = function (obj, tid) {

    var data = {
        meta: {
            processed: true
        },
        data: {
            success: true,
            msg: ''
        },
        result: obj,
        code: 200,
        host: getCurrentHost()
    };

    if (tid) {
        data.tid = tid;
        data.meta.tid = tid;
    }

    return data;
}

/**
 * Ошибочный результат сокет сообщения
 * @param {string} message текст ошибки
 * @param {number} code код результата, например, 200, 401 и т.д.
 * @param {string} tid идентификатор. Может быть пустым
 * @returns объект
 */
exports.socketFailResultLayout = function (message, code, tid) {

    var data = {
        meta: {
            processed: true
        },
        data: {
            success: false,
            msg: message
        },
        code: code,
        host: getCurrentHost()
    }

    if (tid) {
        data.tid = tid;
        data.meta.tid = tid;
    }

    return data;
}

/**
 * Создание мета-блока
 * @param {to} string кому
 * @param {from} string от кого
 * @param {groups} string отправить группе
 */
exports.createMeta = function (to, from, groups) {
    return {
        to: to,
        from: from,
        groups: groups,
        tid: pm.getGUID()
    }
}

/**
 * Получение текущего хоста
 * @returns {string}
 */
exports.getCurrentHost = getCurrentHost;

function getCurrentHost() {
    return 'localhost:' + args.port;
}

/**
 * Получение виртуального каталога
 * @returns {string}
 */
exports.getVirtualDirPath = function () {
    return args.virtual_dir_path || conf.get('virtual_dir_path');
}

/**
 * Строка подключения к БД
 * @returns {string}
 */
exports.getConnectionString = function () {
    return args.connection_string || conf.get('connectionString');
}