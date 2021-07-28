<!--
 * @Description: Vscode配置
 * @Author: 武明琴
 * @Date: 2021-01-20 10:39:47
 * @EditAuthor: 修改人名称
 * @LastEditTime: 2021-01-20 14:20:03
-->
# Vscode配置



## 插件部分

1. Add jsdoc commnets—v0.0.8 (可选: 为所选函数签名的参数添加简单的jsdoc注释)
2. Auto Close Tag—v0.5.9(可选:自动闭合标签)
3. Auto rename Tag—v0.1.5(可选:自动闭合标签)
4. Beautify—v1.5.0(可选: 在Visual Studio代码中美化javascript、JSON、CSS、Sass和HTML。)
5. Bracket Pair Colorizer—v1.0.61(可选: 扩展允许用颜色来匹配括号。用户可以定义匹配的字符和使用的颜色。)
6. Chinese (Simplified) Language Pack for Visual Studio Code—v1.51.2(可选:中文)
7. CSS peek—v4.0.2(可选:css转到定义)
8. Debugger for Chrome—v4.12.11(可选:调试器)
9. **ESLint—2.1.13**(必选:eslint规则校验)
10. **Git Easy—v1.11.0**(必选:git管控)
11. **Git History-v0.6.14**(必选:git历史查看)
12. **GtiLens-v11.0.6**(必选: GitLens将Git功能添加到Visual Studio代码中。通过Git责备注释和代码镜头，它可以帮助您直观地看到代码的作者身份，无缝地导航和探索Git存储库，通过强大的比较命令获得有价值的见解，等等。)
13. Guides-v0.9.3 (可选:引导线)
14. IntelliSense for CSS class names in HTML-v1.19.0(可选: 一个Visual Studio代码扩展，它根据在工作区中找到的定义或通过link元素引用的外部文件为HTML类属性提供CSS类名完成。)
15. **koroFileHeader-v4.7.12** (必选:在vscode中用于生成文件头部注释和函数注释的插件)
16. **npm-v0.3.13**(必选:npm包管理)
17. npm Intellisense-v1.3.1(可选: 在import语句中自动完成npm模块的Visual Studio代码插件。)
18. Path Intellisense-v2.3.0(可选: 自动完成文件名的Visual Studio代码插件。)
19. **Prettier - Code formatter-v5.8.0**(必选:代码美化工具)
20. Vetur-0.30.3(可选:代码美化工具)
21. Vue VSCode Snippets-v.2.1.5(可选:vue样式模版)
22. VueHelper-v0.1.0(可选:vue语法及指令提示)
23. Vue-helper (转到定义)

## 设置部分

``` json
{
    "eslint.alwaysShowStatus": true,
     "eslint.autoFixOnSave": true,
    "prettier.trailingComma": "none", // 尾随逗号
    "prettier.tabWidth": 2, // 缩进字节数
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    },
    "emmet.syntaxProfiles": {},
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "editor.fontSize": 13,
    "guides.enabled": false,
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "open-in-browser.default": "Chrome",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "fileheader.customMade": {
        "Description":"",
        "Author":"姜泽",
        "Date":"Do not edit",
        "LastEditTime": "Do not edit"
    },
    "fileheader.configObj": {
        "createFileTime": true,
        "language": {
            "languagetest": {
                "head": "/$$",
                "middle": " $ @",
                "end": " $/"
            }
        },
        "autoAdd": true,
        "autoAddLine": 100,
        "autoAlready": true,
        "annotationStr": {
            "head": "/*",
            "middle": " * @",
            "end": " */",
            "use": false
        },
        "headInsertLine": {
            "php": 2,
            "sh": 2
        },
        "beforeAnnotation": {
            "文件后缀": "该文件后缀的头部注释之前添加某些内容"
        },
        "afterAnnotation": {
            "文件后缀": "该文件后缀的头部注释之后添加某些内容"
        },
        "specialOptions": {
            "特殊字段": "自定义比如LastEditTime/LastEditors"
        },
        "switch": {
            "newlineAddAnnotation": true
        },
        "supportAutoLanguage": [],
        "prohibitAutoAdd": [
            "json"
        ],
        "prohibitItemAutoAdd": [
            "项目的全称, 整个项目禁止自动添加头部注释, 可以使用快捷键添加"
        ],
        "moveCursor": true,
        "dateFormat": "YYYY-MM-DD HH:mm:ss",
        "atSymbol": [
            "@",
            "@"
        ],
        "atSymbolObj": {
            "文件后缀": [
                "头部注释@符号",
                "函数注释@符号"
            ]
        },
        "colon": [
            ": ",
            ": "
        ],
        "colonObj": {
            "文件后缀": [
                "头部注释冒号",
                "函数注释冒号"
            ]
        },
        "filePathColon": "路径分隔符替换",
        "showErrorMessage": false,
        "wideSame": false,
        "wideNum": 13,
        "CheckFileChange": false,
        "createHeader": true,
        "useWorker": false,
        "typeParam": true,
        "designAddHead": false,
        "headDesignName": "random",
        "headDesign": false,
        "files.associations": {
    ​        "*.ejs":"html",
            "*.js":"html",
            "*.vue":"html"
        },
            "emmet.triggerExpansionOnTab": true,
            "emmet.includeLanguages":{
            "vue-html":"html",
            "vue":"html"
​        }
    },
    "prettier.singleQuote": true
}
```
::: warning 注意
需要在项目根目录中添加.prettierrc文件,并在文件中添加   
``` js
{ "singleQuote": true， // 使用单引号   
  "semi":false, // 分号检查，不显示分号   
}
```
:::

<!-- ::: warning 注意
需要在项目根目录中添加.prettierrc文件,并在文件中添加{ "singleQuote": true，},使用单引号功能才会生效
::: -->