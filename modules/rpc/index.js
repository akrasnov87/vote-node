/**
 * @file modules/rpc/index.js
 * @project mobnius-kes-node
 * @author Александр
 */

var express = require('express');
var router = express.Router();

var auditRouter = require('../system-logs/router/audit');
var authUtil = require('../authorize/util');
var shellContext = require('../custom-context/shell');
var settingContext = require('../custom-context/setting');
var userContext = require('../custom-context/user');
var changePasswordRouter = require('./router/changePassword');
var rpcRouter = require('./router/rpc');
var viewActionsRouter = require('./router/viewactions');
var cacheRouter = require('./router/cache');
var socket = require('../socket/main');
var userRouter = require('./router/user');
var rpcQuery = require('./modules/rpc-query');
var db = require('../dbcontext');

var localContext = require('../localcontext');

/**
 * инициализация модуля для работы с RPC
 * @param {string} auth_type тип авторизации. По умолчанию basic
 */
module.exports = function (auth_type) {
    var contexts = [];

    // контекст данных по умолчанию
    contexts.push(localContext);
    contexts.push(shellContext);

    contexts.push(userContext);
    contexts.push(settingContext);

    rpcQuery.registryContext(db);
    rpcQuery.registryContext(contexts);

    router.use(userRouter());
    router.use(cacheRouter());
    router.use(changePasswordRouter(auth_type));

    router.use(auditRouter(auth_type));
    router.use(rpcRouter(auth_type));
    router.use(viewActionsRouter(auth_type));

    socket.init(auth_type);

    var authType = authUtil.getAuthModule(auth_type);
    router.post('/auth', authType.authorize);

    return router;
}