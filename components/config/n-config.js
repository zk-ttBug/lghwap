'use strict';

/**
 *   navi config
 */
module.exports = {
    default: 'index', //配置默认显示页面
    defaultClass: 'fadeOutLeft animated',//默认样式
    user: {
        name: "游客",
        img: "http://7xawfk.com1.z0.glb.clouddn.com/profile_small.jpg",
        role: "admin"
    },
    menus: [
        {
            id: "index",
            name: "首页",
            icon:"fa fa-home",
            cls: "on",
            url: "#!/index"
        },
        {
            id: "history",
            name: "历史",
            icon:"fa fa-history",
            cls: "",
            url: "#!/history"
        },
        {
            id: "shop",
            name: "商城",
            icon:"fa fa-shopping-cart",
            cls: "",
            url: "#!/shop"
        }
    ]
};