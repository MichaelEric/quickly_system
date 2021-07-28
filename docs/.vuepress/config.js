/*
 * @Author: jiangze
 * @Date: 2021-05-13 10:28:29
 * @LastEditTime: 2021-06-28 13:42:10
 * @LastEditors: jiangze
 * @Description: 配置文件
 * @FilePath: \quickly_build_platform\docs\.vuepress\config.js
 */
module.exports = {
    base: '/ops/',// 部署地址，需要根据具体nginx代理名称设置有关
    // dest:'/dist/',
    title: '拓甫网络科技',
    description: '技术平台',
    head: [
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }], // 搜索框禁止放大
        ["link", {
            rel: "icon",
            href: "/img/logo1.png"
        }], // 添加浏览器图标
        ["link", {
            rel: "stylesheet",
            href: "/css/style.css"
        }], // 引入css
        // ["link", {
        //     rel: "stylesheet",
        //     href: "/node_modules/element-ui/lib/theme-chalk/index.css"
        // }],
        // ["script", {
        //     charset: 'utf-8',
        //     src: '/node_modules/element-ui/lib/index.js'
        // }],
    ],
    // plugins: [
    //     ['vuepress-plugin-code-copy', true]
    // ],
    // plugins: [
    //     ['run', true],
    //     ['code-copy', true],
    //     [
    //         "@mr-hope/copy-code",
    //         true
    //     ],
    // ],
    plugins: require('./plugins'),
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar')
    }
}