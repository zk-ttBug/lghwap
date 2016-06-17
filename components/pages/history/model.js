'use strict'

var apiConfig = require('config/a-config');

var getHisData = function(page,callback){
    $.ajax({
        url: apiConfig.path.historylist,
        dataType: 'json',
        timeout:5000,
        data: {
            page: page
        },
        success: function (data) {
            if (data.code === '200') {
                // console.log(data.data);
                callback(data.data);
            } else {
                $('.errPage').removeClass('hide');
                $('#loading').addClass('hide');
                callback({});
            }
        },
        fail: function () {
            console.log('fail');
            $('.errPage').removeClass('hide');
            $('#loading').addClass('hide');
            callback({});
        }
    });
}


module.exports = {
    getHisData: getHisData,
}