# pagination

## 介绍

- **pagination 是基于Element的pagination封装的一个适用于pc端的分页组件 ，一般用于列表页，进行分页操作,组件中有，上一页，下一页，翻页等操作，组件中对当前页是否为空进行了判断，
如果当前页为空且大于1，就会将当前页减1再次触发父组件更改当前页方法。**

## 样式

<pagination-demo></pagination-demo>


## 使用说明

将组件放入src\components的组件文件夹内，在需要使用的页面进行如下引入：
```js
import pagination from './pagination.vue';
export default {
  data() {
    return {
      total: 1, // 默认数据总数
      pageSize: 10, // 每页的数据条数
      count: 1, //总页数
      currentPage: 1, // 默认开始页面
      listNum: [], // 列表
    };
  },
  methods: {
    getListNum(){
      //请求数据，对total、count、listNum 进行重新赋值
    },
    // 改变当前页方法
    handleCurrentChangeFn(v) {
      this.currentPage = v;
      this.getListNum();
    }
  }
};
```

_在 vue 页面 template 中写入以下代码段_

```html
<pagination
  :total="total"
  :count="count"
  :list-num="listNum"
  :page-size="pageSize"
  :current-page="currentPage"
  style="text-align: center"
  @handle-current="handleCurrentChangeFn"
/>
```
组件中，total需要传总条数，count需要传总页数，list-num需要传获取到的数据，pageSize需要传每页的数据条数，currentPage 需要传默认开始页数， handle-current需要绑定一个方法，作用是
调用父组件方法来刷新数据列表，重新当前页参数currentPage赋值。

## 组件代码

<<< @/docs/.vuepress/components/pagination.vue

## 传参配置

1、total

- total 参数用来控制底部分页总条数，默认值为1,没有设置必填但为了正确显示组件，需要填写。

| 名称       |  类型   |  必填 | 默认值 |
| ---------- | :-----: | ----: | :-----: |
| total | Number | false | 1 |

2、count
- count 参数用来控制底部分页总页数，默认值为0，没有设置必填但为了正确显示组件，需要填写。

| 名称       |  类型   |  必填 | 默认值 |
| ---------- | :-----: | ----: | :-----: |
| count | Number | false | 0 |

3、pageSize
- pageSize 参数用来控制每页展示的数据条数，默认值为10，没有设置必填但为了正确显示组件，需要填写。

| 名称       |  类型   |  必填 | 默认值 |
| ---------- | :-----: | ----: | :-----: |
| pageSize | Number | false | 10 |

4、currentPage
- currentPage 参数用来控制当前开始页，默认值为1，即显示第一页，没有设置必填但为了正确显示组件，需要填写。

| 名称       |  类型   |  必填 | 默认值 |
| ---------- | :-----: | ----: | :-----: |
| currentPage | Number | false | 1 |

5、listNum

- listNum 参数用来控制分页展示的数据，默认值为空数组，没有设置必填但为了正确显示组件，需要传入通过接口获取到的正确数据。

| 名称       |  类型   |  必填 | 默认值 |
| ---------- | :-----: | ----: | :-----: |
| listNum | Array | false | [] |


## 事件

### 1.handle-current

- 当前页改变时触发，用于更改当前页，并调用获取列表接口，重新获取数据源，方法内可以写入以下内容，其中v表示当前页的参数，currentPage表示当前页，getListNum是获取列表页方法，在此中获取数据，重新将data中的total、count、listNum等数据更新。

```js
handleCurrentChangeFn(v) {
  this.currentPage = v;
  this.getListNum();
}
```