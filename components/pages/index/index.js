'use strict';

/**
 * 移动端首页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('index.tpl');

var index = Vue.extend({
    template: tpl,
    ready: function () {
        console.log(123123);
    }
});

var init = function () {
    return new index({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}