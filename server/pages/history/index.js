'use strict'

var his1 = require('../../mock/historys');
var his2 = require('../../mock/historys2');
var init = function (app) {
    /**
     * 获取系统时间
     */
    app.get('/api/getHistory', function (req, res) {
        if (req.query && req.query.page) {
            var page = req.query.page;
            if (page === '1') {
                res.send({
                    "code": "200",
                    "msg": "success",
                    "data": his1
                });
            } else if (page === '2') {
                res.send({
                    "code": "200",
                    "msg": "success",
                    "data": his2
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