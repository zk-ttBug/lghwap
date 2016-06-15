'use strict';

/**
 * 移动端首页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('index.tpl');
var head = require('widgets/head');
var navi = require('widgets/navi');
var slider = require('widgets/slider');
var footer = require('widgets/footer');

var index = Vue.extend({
    template: tpl,
    components:{
        "c-head":head(),
        "c-navi":navi(),
        "c-slider":slider(),
        "c-footer":footer()
    },
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