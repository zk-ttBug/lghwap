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
            name: "Home",
            cls: "on",
            url: "#!/index"
        },
        {
            id: "about",
            name: "About us",
            cls: "",
            url: "#!/about"
        },
        {
            id: "contract",
            name: "Contract us",
            cls: "",
            url: "#!/contract"
        },
        {
            id: "quote",
            name: "Get a quote",
            cls: "",
            url: "#!/quote"
        }
    ]
};