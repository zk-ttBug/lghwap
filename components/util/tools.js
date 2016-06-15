'use strict';

/**
 * This is the description for my class.
 *
 * @class Tools  前端工具封装
 * @constructor
 */

/**
 * @method 获取location.hash 后面的参数
 * @return {Object} Returns 参数对象
 */
var getHashParams = function () {
    var hash = location.hash;
    var result = {};
    if (hash.indexOf('?') > -1) {
        var hashvalues = hash.split('?')[1];
        if (hashvalues && hashvalues !== '') {
            var paramsArr = hashvalues.split('&');
            if (paramsArr.length > 0) {
                result = handleParams(paramsArr);
            }
        }
    }
    return result;
}

var handleParams = function (paramsArr) {
    var result = {};
    for (var i = 0; i < paramsArr.length; i++) {
        var name = paramsArr[i].split("=")[0];
        var value = paramsArr[i].split("=")[1];
        result[name] = value;
    }
    return result;
}



var getImageSize = function (data) {
    var contW = window.innerWidth - 40,
        contH;
    if (data.width && data.height) {
        var whp = (parseInt(data.height) / parseInt(data.width)).toFixed(2);
        contH = Math.round(contW * whp);
    } else {
        contH = parseInt(window.innerHeight / 2);
    }
    return {
        w: contW,
        h: contH
    };
}


//节流器
var throttle = function(fn, delay) {
    // alert('throttle');
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}


module.exports = {
    getHashParams: getHashParams,
    getImageSize:getImageSize,
    throttle:throttle
}