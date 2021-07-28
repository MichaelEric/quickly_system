<!--
 * @Description: 
 * @Author: 武明琴
 * @Date: 2021-01-14 16:50:45
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-01-15 17:34:11
-->
# home Two


::: run {jsLabs: 'https://unpkg.com/element-ui/lib/index.js', cssLabs: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'}

``` html
<template>
    <h2 class="title">{{name}} DEMO利器!</h2>
</template>
<script>
    export default {
        data() {
            return {
                name: 'vuepress-plugin-run'
            }
        }
    }
</script>
<style>
    .title {
        color: #3eaf7c;
    }
</style>
```

:::

``` html

<template>
    <div class="title">{{name}}</div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'vuepress-plugin-run'
            }
        }
    }
</script>
<style>
    .title {
        color: #3eaf7c;
    }
</style>

```

