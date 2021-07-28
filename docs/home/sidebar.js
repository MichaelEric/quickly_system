/*
 * @Description: 首页侧边栏
 * @Author: 武明琴
 * @Date: 2021-01-14 16:40:51
 * @EditAuthor: jiangze
 * @LastEditTime: 2021-07-28 10:20:05
 */
module.exports = [
  {
    title: '规范',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: 'Vscode配置',
        path: '/home/standard/Vscode'
      },
      {
        title: '工具及地址',
        path: '/home/standard/address'
      },
      {
        title: '前端代码规范第一版',
        path: '/home/standard/codeOne'
      }
    ]
  },
  {
    title: '项目框架',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      {
        title: 'pc展示端',
        path: '/home/framework/show'
      },
      {
        title: 'pc后台管理端',
        path: '/home/framework/manage'
      },
      {
        title: '移动端',
        path: '/home/framework/mobile'
      }
    ]
  },
  {
    title: '技术栈',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: 'vue',
        path: '/home/technologyStack/vue',
        children: [
          {
            title: 'exspsheet(在线excel)',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/technologyStack/vue/exspsheet'
          },
          {
            title: 'collapse(展开收缩)',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/technologyStack/vue/collapse'
          },
          {
            title: 'pagination(分页)',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/technologyStack/vue/pagination'
          },
          {
            title: '响应式组件(适用pc)',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/technologyStack/vue/responsive'
          },
          {
            title: '动态布局',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/technologyStack/vue/dyLayout'
          }
        ]
      }
      // {
      //   title: 'react',
      //   path: '/home/technologyStack/react'
      // },
      // {
      //   title: 'angular',
      //   path: '/home/technologyStack/angular'
      // }
    ]
  },
  {
    title: '图表',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: 'echarts',
        path: '/home/chart/echarts',
        children: [
          {
            title: '柱状图',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/echarts/bar'
          }
        ]
      },
      {
        title: 'highCharts',
        path: '/home/chart/highCharts'
      },
      {
        title: 'datav',
        path: '/home/chart/datav',
        children: [
          // {
          //   title: '介绍',
          //   collapsable: false,
          //   sidebarDepth: 3,
          //   path: '/home/chart/datav/introduce',
          // },
          {
            title: '全屏组件',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/fullScreen'
          },
          {
            title: '边框',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/border'
          },
          {
            title: '装饰',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/decorate'
          },
          {
            title: '动态圆环',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/loop'
          },
          {
            title: '胶囊进度条',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/capsule'
          },
          {
            title: '水位图',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/water'
          },
          {
            title: '进度池',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/chart/datav/percent'
          }
        ]
      }
    ]
  },
  {
    title: '大屏',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: '大屏展示',
        children: [
          {
            title: '样式1',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/screen/show/show1'
          },
          {
            title: '样式2',
            collapsable: false,
            sidebarDepth: 3,
            path: '/home/screen/show/show2'
          }
        ]
      },
      {
        title: '列表类',
        path: '/home/screen/list'
      },
      {
        title: '图表类',
        path: '/home/screen/chart'
      },
      {
        title: '交互类',
        path: '/home/screen/interaction'
      },
      {
        title: '动效类',
        path: '/home/screen/dynamicEffect'
      }
    ]
  },
  {
    title: '地图',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: 'arcGis地图',
        path: '/home/map/arcGis'
      },
      {
        title: 'leafLet地图',
        path: '/home/map/leafLet'
      },
      {
        title: 'openLayer地图',
        path: '/home/map/openLayer'
      },
      {
        title: 'superMap地图',
        path: '/home/map/superMap'
      },
      {
        title: '高德地图',
        path: '/home/map/scott'
      },
      {
        title: '百度地图',
        path: '/home/map/baidu'
      },
      {
        title: '其他地图',
        path: '/home/map/other'
      }
    ]
  },
  {
    title: 'UI组件库',
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: 'ElementUI',
        path: '/home/component/ElementUI'
      },
      {
        title: 'iview',
        path: '/home/component/iview'
      },
      {
        title: 'bootstrap',
        path: '/home/component/bootstrap'
      },
      {
        title: 'vant',
        path: '/home/component/vant'
      },
      {
        title: ' Ant design vue',
        path: '/home/component/AntDesignVue'
      },
      {
        title: 'wangeditor',
        sidebarDepth: 3,
        path: '/home/component/wangeditor'
      }
    ]
  },
  {
    title: 'javascript',
    collapsable: false,
    sidebarDepth: 1,
    path: '/home/javascript/'
    // children: [{
    //     title: '列表类',
    //     path: '/home/screen/list'
    // }, ],
  },
  {
    title: 'jQuery',
    collapsable: false,
    sidebarDepth: 1,
    path: '/home/jQuery/'
    // children: [{
    //         title: '列表类',
    //         path: '/home/screen/list'
    //     },
    // ],
  },
  {
    title: '样式类',
    collapsable: false,
    sidebarDepth: 1,
    path: '/home/style/'
    // children: [{
    //     title: '列表类',
    //     path: '/home/screen/list'
    // }, ],
  },
  {
    title: '其他类',
    collapsable: false,
    sidebarDepth: 1,
    path: '/home/other/'
    // children: [{
    //     title: '列表类',
    //     path: '/home/screen/list'
    // }, ],
  }
];
