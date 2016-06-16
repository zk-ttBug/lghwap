'use strict'

var his1 = require('../../mock/historys');
var his2 = require('../../mock/historys2');
var historyStore = require('./store.js');
var init = function (app) {
    /**
     * 获取系统时间
     */
    app.get('/api/getHistory', function (req, res) {
        if (req.query && req.query.page) {
            var page = req.query.page;
            var params = {};
            params.page = parseInt(page);
            params.size = 10;
            historyStore.fetchHistorys(params, function (result) {
                res.send({
                    "code": "200",
                    "msg": "success",
                    "data": result
                });
            }, function () {
                res.send({
                    "code": "10050",
                    "msg": "服务端异常",
                    "data": {}
                });
            })
        } else {
            res.send({
                "code": "10000",
                "msg": "参数异常",
                "data": {}
            });
        }

    });
}


module.exports = {
    init: init
};