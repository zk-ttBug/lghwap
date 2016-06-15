'use strict';

/**
 * 菜单栏组件
 *
 * @class navi
 * @constructor
 */

var tpl = __inline('navi.tpl');
var nconfig = require('config/n-config.js');
var navi = Vue.extend({
    data: function () {
        var showMenu = localStorage.getItem('showMenu');
        if (showMenu === "show") {
            nconfig.defaultClass = "fadeInLeft animated";
        }
        return {
            nconfig: nconfig,
            activeMenu: activeMenu
        }
    },
    template: tpl,
    ready: function () {
    },
    events: {
        'navi-update': function (router) {
            console.log(router);
            this.nconfig = this.activeMenu(router);
        }
    },
    props: ['page'],
    methods: {},
    replace: false
});

/**
 *
 * @param router
 * @returns {Object}
 */
var activeMenu = function (router) {
    var menuData = nconfig;
    var menus = menuData.menus;
    for (var i = 0; i < menus.length; i++) {
        if (menus[i].id === router) {
            menus[i].cls = "on"
        } else {
            menus[i].cls = "";
        }
    }
    menuData.menus = menus;
    return menuData;
}

var init = function () {
    return navi;
}

module.exports = init;