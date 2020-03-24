/**
 * @file modules/rpc/router/viewactions.js
 * @project mobnius-kes-node
 * @author Александр
 */

var express = require('express');
var router = express.Router();

var authUtil = require('../../authorize/util');
var db = require('../../dbcontext');


module.exports = function (auth_type) {
    var authType = authUtil.getAuthModule(auth_type);
    router.use('/viewactions', authType.user(false));
    router.get('/viewactions', get);

    return router;
}

/**
 * GET запрос для получения списка actions. Только для авторизованных пользователей.
 * @param {*} req 
 * @param {*} res 
 * @example
 * GET ~/viewactions
 */
function get(req, res) {
    db.pf_ui_actions().Query({
        params: {
            n_user_id: res.user.id
        }
    }, function (data) {
        res.setHeader('Content-Type', 'application/json');
        res.json(data.result.records);
    });
}