#vue-case

## 项目介绍
本项目收集了vue各种特性使用的小例子，演示vue的一些基础用法。本项目旨在快速演示功能，没有使用项目构建工具，所有页面代码打开即可运行。
注意axios如果想要运行，需要先运行node程序：server-axios-api.js

##axios运行命令
根目录，先安装依赖
```
npm install 
```
再执行node程序
```
node server-axios-api
```
然后打开：
http://localhost:8080/axios/sendHttp.html

##文件内容
```
│  package.json # npm的配置文件
│  README.md
│  server-axios-api.js #专门用来为axios提供测试接口的node程序
│  
├─axios	# axios例子
│  │  sendHttp.html # axios发送http请求的例子
│  │  
│  └─jsondata # 测试用的json数据存放目录
│          list.json
│          
├─resource # 所有使用到的资源文件
│  ├─css #使用到的css
│  │      bootstrap.min.css
│  │      datepicker.css
│  │      v-dialog.css
│  │      
│  └─lib #用到的第三方js库
│          axios.min.js
│          datepicker.js
│          jquery-3.1.0.min.js
│          vue-router.min.js
│          vue.min.js
│          vuex.min.js
│          
├─vue # vue相关的示例
│      0-template.html #模板，不用看
│      1-data-binding.html #数据绑定
│      2-tab.html
│      3-search.html
│      4-calc-total.html
│      5-component-dialog.html
│      6-component-dialog-slot.html
│      7-directive-focus.html
│      8-filter.html
│      9-mixin.html
│      10-vue-jquery.html
│      
├─vue-router # 路由相关示例
│      1-base.html
│      2-params.html
│      3-nesting.html
│      4-program.html
│      
└─vuex # 状态管理相关例子
        vuex1-nostore.html
        vuex1-state.html
        vuex2-getters.html
        vuex3-mutations.html
        vuex4-actions.html
        vuex5-modules.html
```