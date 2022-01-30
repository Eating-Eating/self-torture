# 移卡design组件库第二期需求

## 项目背景

公司中台项目众多缺没有统一的组件库以及风格指导，每次开发都需要ui重新设计，前端重新选型，用户体验、开发体验割裂严重。无法形成成套公司鲜明风格的产品。

![大厂 UI 设计师的进阶武器：如何立足于品牌做 UI 设计？](https://image.uisdc.com/wp-content/uploads/2019/09/uisdc-ui-20190924-6.jpg)

- 减轻前端组选型负担
- 减轻ui开发负担
- 规范统一，高效协作
- 统一公司中台前端项目风格，增强产品辨识度
- 减少第三方库的依赖，增强业务稳定性
- 沉淀技术积累
- 提高认知，溢价增值

## 第一期内容：

### 已完成

- 基于vue3.0以及ant-design-vue封装ui组件库，涵盖布局、数据展示、导航、数据入口、反馈五个大类共63个基础组件。
- 修改组件中所有类名，改为yk-design
- 一键打包发布脚本
- 测试模块
- 实现按需引入、全量引入，支持esm以及cjs两种模块系统
- 自动更新迭代信息

### 不足

- 由于yk-design是基于开源库开发而来，个性化不足，难以形成公司特有风格，无法让用户感知品牌，对内需要培养员工公司认同感，长期使用的对外需要提高用户对产品的认知，通过创造情感性价值实现产品的溢价增值。
- 基于对内、对外两种不同需求，衍生出两个需求

![image-20201124152419049](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124152419049.png)

由此产生

## 第二期的需求：

### UI工作

1、针对demo网站需要提供设计稿，针对源代码、组件效果提供设计图。

2、归纳需要个性化的组件并产出设计图，参考：okr、管理支撑平台、项目进度管理项目中最常用的组件分别为——Menu（菜单）、Tooltip（文字提示）、Input（输入框）、Scrollbar（滚动条）、RadioGroup（单选组）、RadioButton（单选框）、Popover（气泡提示）、Button（按钮）、Dropdown（下拉框）、Drawer（抽屉）、Table（表格）、Pagination（分页器）、Select（选择框）、Dialog（对话框）、Cascader（级联选择器）、Message（全局提示）、 Loading（加载中）。

3、需要一个组件库LOGO，用在demo网站上。

#### demo网站说明如下：

![image-20201124152935410](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124152935410.png)

![image-20201124153104060](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124153104060.png)

![image-20201124153137940](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124153137940.png)

单个组件的展示模块分为三部分：源代码、文字说明、组件实际效果展示。需要设计配合出该模块的设计图。

### 示例：

#### 示例1：左边是打开源代码时，右边是未展开源代码：

<div style="display:flex">
	<img width="50%" height="100%" src="C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124153648755.png"/>
    <img width="50%" height="100%" src="C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124153731850.png"/>
</div>


#### 示例2：上面是组件效果展示下面始终显示源代码：

![image-20201124155326177](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124155326177.png)





#### 示例3：左边为组件展示效果，右边始终显示源代码：

![image-20201124155055762](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124155055762.png)

![image-20201124155530783](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124155530783.png)

可供参考的组件库demo网站链接：

quasar：https://quasar.dev/vue-components/input

vuetify：[https://vuetifyjs.com/en/components/inputs/#error-count](http:)

iview：http://iview.talkingdata.com/#/components/input

buefy：https://buefy.org/documentation/input

vuesax：[https://vuesax.com/docs/components/Input.html#default](http:)

bootstrap-vue：https://bootstrap-vue.org/docs/components/form-input 

primevue:https://www.primefaces.org/primevue/showcase/#/inputtext 

### 前端工作：

1. demo网站搭建，为快速开发，demo网站采用自研mardown解析器参与编译、将markdown编译为vue，通过解析特定token（:::demo :::）在编写完组件后可以快速分三部分（文字说明、组件效果展示、源代码）展示效果，不必写完整网页即可展示，同时可以正常解析markdown，用以编写api文档。如图所示：![image-20201124161700782](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20201124161700782.png)
2. 个性化组件开发，完整版demo网站搭建，编写使用说明，API文档等。

## 总结：

UI：demo网站设计图、个性化组件设计图、LOGO设计图。

前端：demo网站、个性化组件开发。