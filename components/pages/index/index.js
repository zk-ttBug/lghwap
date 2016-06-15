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
var next = 0;
var scrollBase = 0;
var currentPage = 1;
var rending = false;

var index = Vue.extend({
    template: tpl,
    components: {
        "c-head": head(),
        "c-navi": navi(),
        "c-slider": slider(),
        "c-footer": footer()
    },
    ready: function () {
        render();
        bindScroll();
    }
});

var scrollLoadThr = tools.throttle(scrollHandler, 100);

function render() {
    rending = true;
    indexModel.getIndexData(currentPage, function (data) {
        rending = false;
        var total = data.total;
        next = Math.ceil(parseInt(total) / 10);
        console.log('next:' + next);
        renderTpl(data);
    });
}

function loadMore(){
    rending = true;
    indexModel.getIndexData(currentPage, function (data) {
        rending = false;
        renderTpl(data);
    });
}

function scrollHandler() {
    var curScrollTop = window.pageYOffset;
    if (window.pageYOffset >= (parseInt(document.body.offsetHeight - window.screen.availHeight) / 2)) {
        scrollBase = $('#index-wrap').offsetHeight;
        if(rending === true){
            return;
        }
        if(next < 1){
            console.log('已经加载完成!!!!');
            return;
        }
        currentPage++;
        loadMore();
    }
}


function bindScroll() {
    unbindScroll();
    //触底加载绑定的事件
    $(window).on('scroll', scrollLoadThr);
}

function unbindScroll() {
    $(window).off('scroll', scrollLoadThr);
}

function renderTpl(data) {
    if (next > 0) {
        var arr = [];
        for (var i = 0; i < data.list.length; i++) {
            arr = setTmpl(arr, data.list[i]);
        }
        var arrStr = arr.join('');
        $('#index-wrap').append(arrStr);
    }
    next--;
}

function setTmpl(arr, data) {
    var option = {
        width: parseInt(data.imgWidth),
        height: parseInt(data.imgHeight)
    }
    var result = tools.getImageSize(option);
    arr.push('<div class="index-posts-item">');
    arr.push(' <div class="index-item_title_bottom index-pic_item_title index-clip_words_2">');
    arr.push('<span class="index-title red accent-2">' + data.title + '</span>');
    arr.push('<span class="index-date">' + data.createDate + '</span>');
    arr.push('</div>');
    arr.push('<div class="index-post-wrap">');
    arr.push('<img src="' + data.img + '" style="width:' + result.w + 'px ;height:' + result.h + 'px">');
    arr.push('<div class="index-desc-wrap">');
    arr.push('<p>' + data.desc + '</p>');
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