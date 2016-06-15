'use strict'

var top1 = require('../../mock/topics');
var top2 = require('../../mock/topics2');
var init = function (app) {
    /**
     * 获取系统时间
     */
    app.get('/api/getTopics', function (req, res) {
        if (req.query && req.query.page) {
            var page = req.query.page;
            if (page === '1') {
                res.send({
                    "code": "200",
                    "msg": "success",
                    "data": top1
                });
            } else if (page === '2') {
                res.send({
                    "code": "200",
                    "msg": "success",
                    "data": top2
                });
            } else {
                res.send({
                        "code": "200",
                        "msg": "success",
                        "data": {}
                    }
                );
            }
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