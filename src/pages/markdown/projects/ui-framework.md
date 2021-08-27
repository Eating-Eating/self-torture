## <a id="whatis">是什么</a>
基于ant-design-vue改的组件库

60多个组件

两种打包模式，esDir/libDir，

主要开发：

1. 重写发布流程，重写打包逻辑
2. 新写组件展示组件，一个md含有多个演示代码块
   - 一个md文件就是一个vue文件，name为page-demo输出。
   - 将自定义token里的代码块转化为componentString的字符串形式的渲染函数放入page-demo中的components属性中，防止方法、data污染。
   - show-block=>souce插槽中插入componentString，html插槽中插入转化为html的源码，实际上还有其他的插槽，比如describe插槽，提示插槽。
   - 多个show-block组成一个page-demo组件。
3. yarn link链接调试组件。

## <a id="issue">缺陷/优化</a>

单md重复import校验

md-loader中自定义token

vue3-render渲染

压缩CSS：optimize-css-assets-webpack-plugin，

import-plugin：解决import css跟import Js

gulp：编写发布，发布校验，打包等自动化脚本，控制打包参数。

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

svelte：**No Runtime**、**Samll**、**高性能**、**更少的代码**、**单测不友好**、**生态不完善**、**数组映射脏数据更新**

vue

