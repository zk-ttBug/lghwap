'use strict'

var request = require('request');
var config = require('../../config/config');

var fetchTopics = function (option, callback,fail) {
    option.url = config.host + config.api.topics;
    console.log(option);
    console.log('ur:'+option.url);
    request.get(option, function (err, res, body) {
        console.log(err);
        if(err){
            fail();
        }else{
            var result = body
            if(typeof(body) === 'string'){
                try{
                    result = JSON.parse(body);
                }catch(e){
                    result.data={};
                }

            }
            callback(result.data);
        }
    })
}


module.exports = {
    fetchTopics: fetchTopics
};