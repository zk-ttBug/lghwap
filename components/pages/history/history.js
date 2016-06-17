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
var backtop = require('widgets/backtop');
var hisModel = require('./model.js');
var message = require('widgets/message');
var tools = require('util/tools');
var next;
var historyObj = {
    scrollBase: '',
    currentPage: '',
    rending: '',
}


var history = Vue.extend({
    template: tpl,
    components: {
        "c-head": head(),
        "c-navi": navi(),
        "c-slider": slider(),
        "c-footer": footer(),
        "c-backtop":backtop(),
        "c-message":message()
    },
    ready: function () {
        next = 0;
        historyObj.scrollBase = 0;
        historyObj.currentPage = 1;
        historyObj.rending = false;
        render();
        bindScroll();
    }
});

function render() {
    historyObj.rending = true;
    $('#loading').removeClass('hide');
    hisModel.getHisData(historyObj.currentPage, function (data) {
        $('#loading').addClass('hide');
        historyObj.rending = false;
        var total = data.total;
        tools.showMsg('已更新'+total+'条数据',3000);
        next = Math.ceil(parseInt(total) / 10);
        console.log('next:' + next);
        renderTpl(data);
    });
}


function bindScroll() {
    unbindScroll();
    //触底加载绑定的事件
    $(window).on('scroll', scrollLoadThrHis);
}

function unbindScroll() {
    $(window).off('scroll');
}

var scrollLoadThrHis = tools.throttle(scrollHandlerHis, 100);

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
    arr.push('<a href="'+data.url+'">');
    arr.push('<div class="it i-changwen js-enter i-changwen_">');
    arr.push('<div class="changwen-wrap">');
    arr.push('<img class="changwen-cover galleryLink" src="' + data.img + '" style="width:' + 120 + 'px ;height:' + 80 + 'px">');
    arr.push('<div class="changwen-rightCont">');
    arr.push('<p class="changwen-title">' + data.title + '</p>');
    arr.push('<p class="changwen-desc">' + data.desc + '</p>');
    arr.push('</div></div>');
    arr.push('<div class="lI-meta lI-meta_noShare">');
    arr.push('<span class="tags ' + tools.getColors() + '">' + data.address + '</span>');
    arr.push('<span class="tags ' + tools.getColors() + '">' + data.tag + '</span>');
    arr.push('</div></div></a>');
    return arr;
}

function scrollHandlerHis() {
    if (window.pageYOffset > 76) {
        $('#backtop').removeClass('hide');
        //document.getElementsByClassName('backtop')
    } else {
        $('#backtop').addClass('hide');
        //document.getElementsByClassName('backtop').display = 'none';
    }
    if (window.pageYOffset >= (parseInt(document.body.offsetHeight - window.screen.availHeight) / 2)) {
        historyObj.scrollBase = $('#his-warp').offsetHeight;
        if (historyObj.rending === true) {
            return;
        }
        if (next < 1) {
            console.log('已经加载完成!!!!');
            return;
        }
        historyObj.currentPage++;
        loadMore();
    }
}


function loadMore() {
    historyObj.rending = true;
    $('#loading').removeClass('hide');
    hisModel.getHisData(historyObj.currentPage, function (data) {
        $('#loading').addClass('hide');
        historyObj.rending = false;
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