var express = require("express");
var router = express.Router();
var logjs = require('../modules/log');
var mailer = require('../modules/socket/mailer');

module.exports = function (auth_type) {
    router.get("/", function (req, res, next) {
        var to = req.query.to;
        var from = req.query.from;
        var groups = req.query.groups;
        var message = req.query.message;

        if (!to || !from || !message) {
            res.send("FAIL. Отправитель, получатель либо текст сообщения не указаны.");
        } else {
            logjs.debug('Отправка уведомления через HTTP-протокол. Отправитель ' + from + ', Получатель ' + to);
            mailer.sendText(req.socket, from, to, message, groups);

            res.send('SUCCESS');
        }
    });

    router.get("/check", function (req, res, next) {
        res.send('SUCCESS');
    });

    return router;
}