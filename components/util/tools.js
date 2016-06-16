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


var getColors = function(){
    var colors = [];
    colors.push('red darken-1');
    colors.push('red darken-2');
    colors.push('red darken-3');
    colors.push('red darken-4');
    colors.push('pink darken-1');
    colors.push('pink darken-2');
    colors.push('pink darken-3');
    colors.push('pink darken-4');
    colors.push('yellow darken-1');
    colors.push('yellow darken-2');
    colors.push('yellow darken-3');
    colors.push('yellow darken-4');
    colors.push('amber darken-1');
    colors.push('amber darken-2');
    colors.push('amber darken-3');
    colors.push('amber darken-4');
    colors.push('orange darken-1');
    colors.push('orange darken-2');
    colors.push('orange darken-3');
    colors.push('orange darken-4');
    colors.push('deep-orange darken-1');
    colors.push('deep-orange darken-2');
    colors.push('deep-orange darken-3');
    colors.push('deep-orange darken-4');
    var num =  parseInt(Math.random()*parseInt(colors.length));
    return colors[num];
}


module.exports = {
    getHashParams: getHashParams,
    getImageSize:getImageSize,
    throttle:throttle,
    getColors:getColors
}