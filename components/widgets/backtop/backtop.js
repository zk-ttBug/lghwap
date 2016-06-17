'use strict';

/**
 * 回到头部
 *
 * @class backtop
 * @constructor
 */

var tpl = __inline('backtop.tpl');
var tools = require('util/tools');
var backtop = Vue.extend({
    template: tpl,
    ready: function () {
    },
    props: ['page'],
    methods: {
        onTop:function(){
            tools.speedUpToTop();
        }
    },
    replace: false
});


/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method init
 * @return {Object} Returns head component
 */
var init = function () {
    return backtop;
}

module.exports = init;