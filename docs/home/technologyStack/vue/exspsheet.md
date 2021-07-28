# exspsheet

![](../../../../docs/.vuepress/public/img/manage/exspsheet.png)

<!-- <exspsheet-demo /> -->

- **_exspsheet 基于 x-data-spreadsheet，运用 xlsx 等插件，可对 excel 进行在线的创建，编辑，保存，导入导出等。
  支持本地文件导入，导出 json，xlsx，blob 等格式。_**

## 安装

1. npm 方式

```
    npm install exspsheet
```

2. yarn 方式

```
    yarn add exspsheet
```

::: tip 依赖包
babel-preset-es2015 less less-loader vue x-data-spreadsheet xlsx
:::

- 安装后无法启动，请检查 package.json 中配置是否存在以上依赖包。

## 引用

安装之后，在需要使用的页面进行如下引入：

```js {1,5}
import exspsheet from "exspsheet";
export default {
  name: "MyComponent",
  components: {
    exspsheet,
  },
};
```

## 使用

_在 html 中写入以下代码段_

```html
<!-- 此代码目前为完整配置-->
<exspsheet
  :jsonParam="jsonParam"
  :blobParam="blobParam"
  :isFile="isFile"
  :isBlob="isBlob"
  :isJson="isJson"
  :isLocalFile="isLocalFile"
  @jsonResult="jsonResult"
  @blobResult="blobResult"
>
</exspsheet>
```

## 参数配置

### 1.jsonParam

- 用于向 excel 中传入 json 格式的 string 数据，渲染至页面。

| 名称      |  类型  |  必填 |
| --------- | :----: | ----: |
| jsonParam | String | false |

```js
this.jsonParam =
  '[{"name":"商品销售明细表","freeze":"A1","styles":[],"merges":[],"rows":{"0":{"cells":{"0":{"text":"商品销售明细表"}}},"1":{"cells":{"0":{"text":"门店编号："},"1":{"text":"CS102003624"},"2":{"text":"门店名称："},"3":{"text":"零食店"},"5":{"text":" "},"6":{"text":"时间："},"7":{"text":"2020/01/01 - 2020/12/31"},"14":{"text":" "}}},"2":{"cells":{"0":{"text":"汇总一栏"},"1":{"text":"净销量"},"2":{"text":"净销售额(元)"},"3":{"text":"折前金额(元)"},"4":{"text":"销售成本（元）"},"5":{"text":"销售毛利（元）"},"6":{"text":"毛利率（%）"},"7":{"text":"退货数量"},"8":{"text":"退货金额（元）"},"9":{"text":"退货率（%）"}}},"3":{"cells":{"1":{"text":"45868"},"2":{"text":"226729.90 "},"3":{"text":"235092.20 "},"4":{"text":"151196.98 "},"5":{"text":"7"},"6":{"text":"33.32 "},"7":{"text":"262"},"8":{"text":"1565.90 "},"9":{"text":"0.57 "}}},"4":{"cells":{}},"5":{"cells":{"0":{"text":"条形码"},"1":{"text":"商品名称"},"3":{"text":"分类"},"4":{"text":"品牌"},"5":{"text":"净销量"},"6":{"text":"净销售额(元)"},"7":{"text":"折前金额(元)"},"8":{"text":"销售成本（元）"},"9":{"text":"销售均价（元）"},"10":{"text":"销售毛利（元）"},"11":{"text":"毛利率（%）"},"12":{"text":"毛利比重（%）"},"13":{"text":"退货数量"},"14":{"text":"退货金额（元）"},"15":{"text":"退货率（%）"}}},"6":{"cells":{"0":{"text":"2000000004754"},"1":{"text":"巧妈妈水蜜桃/橘子味果冻"},"3":{"text":"巧克力糖果茶饮类"},"4":{"text":"其他"},"5":{"text":"2286"},"6":{"text":"3552.97 "},"7":{"text":"4114.80 "},"8":{"text":"2286.00 "},"9":{"text":"1.55 "},"10":{"text":"1266.97 "},"11":{"text":"35.66 "},"12":{"text":"1.68 "},"13":{"text":"16"},"14":{"text":"25.20 "},"15":{"text":"0.70 "}}},"len":100},"cols":{"len":26},"validations":[],"autofilter":{}}]';
```

---

### 2.blobParam

- 用于向 excel 中传入 blob 格式的数据，渲染至页面。

| 名称      | 类型 |  必填 |
| --------- | :--: | ----: |
| blobParam | blob | false |

```js
    blobParam: new Blob,
```

### 3.isFile

- 是否使用导出本地文件功能，默认 false。

| 名称   |  类型   |  必填 |
| ------ | :-----: | ----: |
| isFile | boolean | false |

```js
    isFile: true,
```

### 4.isBlob

- 是否使用导出 blob 格式功能，默认 false。

| 名称   |  类型   |  必填 |
| ------ | :-----: | ----: |
| isBlob | boolean | false |

```js
    isBlob: true,
```

### 5.isJson

- 是否使用导出 json 功能，默认 false。

| 名称   |  类型   |  必填 |
| ------ | :-----: | ----: |
| isJson | boolean | false |

```js
    isJson: true,
```

### 6.isLocalFile

- 是否使用本地导入文件功能，默认 false。

| 名称        |  类型   |  必填 |
| ----------- | :-----: | ----: |
| isLocalFile | boolean | false |

```js
    isLocalFile: true,
```

## 事件

### 1.jsonResult

- 用于接收 json 格式导入结果。得到数据后可进行下部处理

```js
jsonResult(value){
    console.log(value)
},
```

### 2.blobResult

- 用于接收 blob 格式导入结果。得到数据后可进行下部处理

```js
blobResult(value){
    console.log(value)
},
```
