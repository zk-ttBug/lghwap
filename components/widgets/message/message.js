'use strict';

/**
 * 消息组件
 *
 * @class message
 * @constructor
 */

var tpl = __inline('message.tpl');
var tools = require('util/tools');
var message = Vue.extend({
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
    return message;
}

module.exports = init;