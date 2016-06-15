'use strict'

var apiConfig = require('config/a-config');

var getIndexData = function(page,callback){
    $.ajax({
        url: apiConfig.path.topiclist,
        dataType: 'json',
        data: {
            page: page
        },
        success: function (data) {
            if (data.code === '200') {
               // console.log(data.data);
                callback(data.data);
            } else {
                callback({});
            }
        },
        fail: function () {
            console.log('fail');
            callback({});
        }
    });
}


module.exports = {
    getIndexData: getIndexData,
}