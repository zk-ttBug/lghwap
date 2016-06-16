'use strict'

var top1 = require('../../mock/topics');
var top2 = require('../../mock/topics2');
var indexStore = require('./store.js');
var init = function (app) {
    /**
     * 获取系统时间
     */
    app.get('/api/getTopics', function (req, res) {
        if (req.query && req.query.page) {
            var page = req.query.page;
            var params = {};
            params.page =parseInt(page);
            params.size = 10;
            indexStore.fetchTopics(params, function (result) {
                res.send({
                    "code": "200",
                    "msg": "success",
                    "data": result
                });
            },function(){
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