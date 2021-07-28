/*
 * @Description: 
 * @Author: 武明琴
 * @Date: 2021-01-14 17:24:00
 * @EditAuthor: 修改人名称
 * @LastEditTime:2021-05-19 09:30:21
 */
module.exports = [{
        title: '我的',
        collapsable: false,
        children: [{
                title: 'one',
                path: '/my/one'
            },{
                title: 'two',
                path: '/my/two'
            }
        ],
    },
    {
        title: '项目框架',
        collapsable: false,
        sidebarDepth: 1,
        children: [{
                title: '介绍',
                path: '/my/'
            }, {
                title: '登录页',
                path: '/my/manage_system/login'
            },
            {
                title: '首页2',
                path: '/my/manage_system/two'
            },

        ],
    },
]