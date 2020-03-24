/**
 * @file modules/localcontext.js
 * @project mobnius-kes-node
 * @author Александр
 * @todo Пример реализации пустого контекста
 */

/**
 * объект для формирования ответа
 */
var result_layout = require('mobnius-pg-dbcontext/modules/result-layout');
/**
 * провайдер по обработке данных
 */
var dbcontext = require('../modules/dbcontext');

/**
 * утилиты
 */
exports.utilits = function () {
    return {
        isLocal: true, // нужно указывать, иначе безопасность при создании meta не пропустит
    }
}