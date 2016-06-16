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
var hisModel = require('./model.js');
var tools = require('util/tools');
var next;
var scrollBase;
var currentPage;
var rending;

var history = Vue.extend({
    template: tpl,
    components: {
        "c-head": head(),
        "c-navi": navi(),
        "c-slider": slider(),
        "c-footer": footer()
    },
    ready: function () {
        next = 0;
        scrollBase = 0;
        currentPage = 1;
        rending = false;
        render();
        bindScroll();
    }
});

function render() {
    rending = true;
    $('#loading').removeClass('hide');
    hisModel.getHisData(currentPage, function (data) {
        $('#loading').addClass('hide');
        rending = false;
        var total = data.total;
        next = Math.ceil(parseInt(total) / 10);
        console.log('next:' + next);
        renderTpl(data);
    });
}


function bindScroll() {
    unbindScroll();
    //触底加载绑定的事件
    $(window).on('scroll', scrollLoadThr);
}

function unbindScroll() {
    $(window).off('scroll', scrollLoadThr);
}

var scrollLoadThr = tools.throttle(scrollHandler, 100);

function renderTpl(data) {
    if (next > 0) {
        var arr = [];
        for (var i = 0; i < data.list.length; i++) {
            arr = setTmpl(arr, data.list[i]);
        }
        var arrStr = arr.join('');
        $('#his-warp').append(arrStr);
    }
    next--;
}

function setTmpl(arr, data) {
    var option = {
        width: parseInt(data.imgWidth),
        height: parseInt(data.imgHeight)
    }
    var result = tools.getImageSize(option);
    arr.push('<div class="it i-changwen js-enter i-changwen_">');
    arr.push('<div class="changwen-wrap">');
    arr.push('<img class="changwen-cover galleryLink" src="http://7xve3e.com1.z0.glb.clouddn.com/h2-170-114.jpg">');
    arr.push('<div class="changwen-rightCont">');
    arr.push('<p class="changwen-title">小贱日报 · 每日十则 (6月16日)</p>');
    arr.push('<p class="changwen-desc">41岁女儿持刀狂捅母亲，只因不给其买贵手机</p>');
    arr.push('</div></div>');
    arr.push('<div class="lI-meta lI-meta_noShare">');
    arr.push('<span class="tags deep-purple darken-4">广州</span>');
    arr.push('<span class="tags orange darken-4">饮食</span>');
    arr.push('</div></div>');
    return arr;
}

function scrollHandler() {
    if (window.pageYOffset >= (parseInt(document.body.offsetHeight - window.screen.availHeight) / 2)) {
        scrollBase = $('#his-warp').offsetHeight;
        if (rending === true) {
            return;
        }
        if (next < 1) {
            console.log('已经加载完成!!!!');
            return;
        }
        currentPage++;
        loadMore();
    }
}


function loadMore() {
    rending = true;
    $('#loading').removeClass('hide');
    hisModel.getHisData(currentPage, function (data) {
        $('#loading').addClass('hide');
        rending = false;
        renderTpl(data);
    });
}

var init = function () {
    return new history({
        el: "#page-main",
        replace: false
    })
}

module.exports = {
    init: init
}