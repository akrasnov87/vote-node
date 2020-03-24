/**
 * @file modules/rpc/router/rpc.js
 * @project mobnius-kes-node
 * @author Александр
 * @todo Выполнение RPC запросов
 */

var express = require('express');
var router = express.Router();
var join = require('path').join;

var rpcQuery = require('../modules/rpc-query');
var authUtil = require('../../authorize/util');
var cacher = require('../modules/accesses-cacher');
var conf = require('node-config')(join(__dirname, '../', '../', '../'));
var handler = require('../modules/rpc-handler');
var db = require('../../dbcontext');


module.exports = function (auth_type) {
    var authType = authUtil.getAuthModule(auth_type);
    router.use('/rpc', authType.user(false));

    router.post('/rpc', post_rpc);
    router.get('/rpc/meta', get_rpc_meta);

    return router;
}

/**
 * POST запрос для обработки RPC. Доступен по авторизации
 * @param {*} req 
 * @param {*} res 
 * @example
 * POST ~/rpc 
 * // подробнее тут https://www.appcode.pw/?page_id=412
 */
function post_rpc(req, res) {
    handler(req, res, function (results) {
        res.json(results);
    });
}

/**
 * GET-запрос для получение мета-информации для RPC
 * @param {*} req 
 * @param {*} res 
 * @example
 * GET ~/rpc/meta
 */
function get_rpc_meta(req, res) {
    cacher.getAccesses(res.user.id, function (data) {
        db.sf_get_version().Query({}, function (version) {

            var dbVersion = '0.0.0.0';
            if (version.meta.success) {
                dbVersion = version.result.records[0].sf_get_version;
            }

            var records = data.result.records;

            var sessionState = {
                user: res.user,
                isAuthorize: res.isAuthorize,
                response: res,
                request: req
            };

            res.json(rpcQuery.meta({
                namespace: conf.get('remote_namespace'),
                dbVersion: dbVersion,
                accesses: records // список разделов куда разрешен доступ
            }, sessionState));
        });
    });
}