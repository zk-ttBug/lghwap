'use strict';

/**
 * 移动端历史页
 *
 * @class history
 * @constructor
 */

var tpl = __inline('history.tpl');
var head = require('widgets/head');
var navi = require('widgets/navi');
var slider = require('widgets/slider');
var footer = require('widgets/footer');

var history = Vue.extend({
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
    return new history({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}