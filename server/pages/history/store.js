'use strict'

var request = require('request');
var config = require('../../config/config');

var fetchHistorys = function (option, callback,fail) {
    option.url = config.host + config.api.topics;
    console.log('ur:'+option.url);
    request.get(option, function (err, res, body) {
        console.log(err);
        if(err){
            fail();
        }else{
            var result = JSON.parse(body);
            callback(result.data);
        }
    })
}


module.exports = {
    fetchHistorys: fetchHistorys
};