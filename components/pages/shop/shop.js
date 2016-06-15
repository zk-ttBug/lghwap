'use strict';

/**
 * 移动端商城页
 *
 * @class shop
 * @constructor
 */

var tpl = __inline('shop.tpl');
var head = require('widgets/head');
var navi = require('widgets/navi');
var slider = require('widgets/slider');
var footer = require('widgets/footer');

var shop = Vue.extend({
    template: tpl,
    components:{
        "c-head":head(),
        "c-navi":navi(),
        "c-slider":slider(),
        "c-footer":footer()
    },
    ready: function () {
        $('#xjcshop').bind('click',function(){
            location.href = 'https://wap.koudaitong.com/v2/showcase/homepage?alias=tghes24l';
        });
        //$('#ifcontent').append('<iframe src="https://wap.koudaitong.com/v2/showcase/homepage?alias=tghes24l" style="height: '+ifHeight+'px"></iframe>')
    }
});

var init = function () {
    return new shop({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}