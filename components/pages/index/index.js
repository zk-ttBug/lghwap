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
var indexModel = require('./model.js');
var tools = require('util/tools');

var index = Vue.extend({
    template: tpl,
    components:{
        "c-head":head(),
        "c-navi":navi(),
        "c-slider":slider(),
        "c-footer":footer()
    },
    ready: function () {
        indexModel.getIndexData('1',function(data){
            renderTpl(data);
        })
    }
});

function renderTpl(data){
    var arr = [];
    for(var i = 0; i < data.list.length; i++){
        arr = setTmpl(arr,data.list[i]);
    }
    var arrStr = arr.join('');
   // console.log('arrStr:'+arrStr);
    $('#index-wrap').append(arrStr);
}

function setTmpl(arr,data){
    var option = {
        width:parseInt(data.width),
        height:parseInt(data.height)
    }
    var result = tools.getImageSize(option);
    arr.push('<div class="index-posts-item">');
    arr.push(' <div class="index-item_title_bottom index-pic_item_title index-clip_words_2">');
    arr.push('<span class="index-title red accent-2">'+data.title+'</span>');
    arr.push('<span class="index-date">'+data.createDate+'</span>');
    arr.push('</div>');
    arr.push('<div class="index-post-wrap">');
    arr.push('<img src="'+data.img+'" style="width:'+result.w+'px";height:'+result.h+'px>');
    arr.push('<div class="index-desc-wrap">');
    arr.push('<p>'+data.desc+'</p>');
    arr.push('</div></div></div>');
    return arr;
}

var init = function () {
    return new index({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}