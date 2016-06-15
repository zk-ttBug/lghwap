'use strict';

/**
 * 移动端首页
 *
 * @class index
 * @constructor
 */

var tpl = __inline('contract.tpl');
var head = require('widgets/head');
var navi = require('widgets/navi');
var footer = require('widgets/footer');
var instant;

var contract = Vue.extend({
    template: tpl,
    components:{
        "c-head":head(),
        "c-navi":navi(),
        "c-footer":footer()
    },
    ready: function () {
        // console.log(123123);
    }
});

var init = function () {
    return instant = new contract({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}