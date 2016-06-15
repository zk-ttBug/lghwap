'use strict';

/**
 * 菜单栏组件
 *
 * @class navi
 * @constructor
 */

var tpl = __inline('slider.tpl');
var slider = Vue.extend({
    data: function () {

    },
    template: tpl,
    ready: function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay:3000,
        });
    },
    events: {

    },
    props: ['page'],
    methods: {},
    replace: false
});


var init = function () {
    return slider;
}

module.exports = init;