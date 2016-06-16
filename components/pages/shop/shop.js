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
var tools = require('util/tools');

var shop = Vue.extend({
    template: tpl,
    components:{
        "c-head":head(),
        "c-navi":navi(),
        "c-slider":slider(),
        "c-footer":footer()
    },
    ready: function () {
        render();
        $('#xjcshop').bind('click',function(){
            location.href = 'https://wap.koudaitong.com/v2/showcase/homepage?alias=tghes24l';
        });
    }
});


function render(){
    var result = tools.getImageSize({
        width: 280,
        height: 186
    })
    var arr = [];
    arr.push('<div class="posts-item js-enter-detail js-shareCont" id="xjcshop"  data-type="pics" ctype="">');
    arr.push('<div class="item_title_bottom pic_item_title clip_words_2">');
    arr.push('<p>新金城西饼</p>');
    arr.push('<img class="item-icon" src="c/laoguanghui-wap/0.0.1/pages/shop/img/xjclogo.jpg" style="width: 40px;height: 32px"/>');
    arr.push('</div>');
    arr.push('<div class="mtop10 imglist-wrap">');
    arr.push('<div class="imglist-down" data-down="http://img-9gag-fun.9cache.com/photo/aBYQKR1_460s.jpg"></div>');
    arr.push('<img src="c/laoguanghui-wap/0.0.1/pages/shop/img/dian1.jpg" class=" post-oneImg js-uae-fpt" id="js-iosShareImg-c108cf880af8df23ea13ce1ebc22a3bf" style="width:'+result.w+'px;height:'+result.h+'px">');
    arr.push('</div></div>');
    var arrStr = arr.join('');
    $('#shop-content').append(arrStr);
}

var init = function () {
    return new shop({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}