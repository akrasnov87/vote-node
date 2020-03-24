/**
 * @file modules/injections/accesses.js
 * @project mobnius-kes-node
 * @author Александр
 */

var cacher = require('../cacher');

/**
 * Перегрузка безопасности
 * @param {any} state состояние
 * @param {string} action 
 * @param {string} method
 * @param {any} data данные
 */
exports.reload = function (state, action, method, data) {
    if (action == 'pd_accesses' && method != 'Query') {
        cacher.reload();
    }
}