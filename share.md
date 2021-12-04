# cli

##### 功能

1. 统一配置
2. 统一cli配置

##### 原因

1. 可以集成git flow
2. 作为物料库的基础设施

# 组件库

##### 功能

二次封装的组件库

:root 公共变量

原子变量

##### 原因

设计为了

# low code

演示器：展示层、浮动层、互动层

# chromatic+storybook

# 文轩

1. 避免简历过于丰富
2. vue源码、react源码
3. vite2
4. 聊广度的时候聊flutter、wasm、electron、3D
5. 聊项目：项目中性能优化（发现到调试到实践）![image-20211204111908915](C:\Users\吃饭吃饭\AppData\Roaming\Typora\typora-user-images\image-20211204111908915.png)
6. 前端趋势：大前端概念（侵入其他端，后端移动端桌面端），

# monorepo更新

1. rush

# 规则校验

eslint prettier本地校验，用husky限制

缺陷：可强推

ci使用node+eslint进行增量扫描（git diff比较分支代码对修改的文件进行增量扫描，节省时间）

sonar进行安全、复杂度、大文件、codesmell扫描

webpack->多入口-> git diff->修改文件->找到对应入口->madge模块依赖分析入口

Puppeteer/UI Recorder->ui自动化测试

# 美团low code性能优化

1. 预渲染（无头浏览器模拟离线环境）
2. 离线化

