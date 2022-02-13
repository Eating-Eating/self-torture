## 前端架构图

![system](C:\Users\simple\Desktop\新建文件夹 (5)\system.png)

## 平台功能示意

##### 配置流程图：

![process](C:\Users\simple\Desktop\新建文件夹 (5)\process.png)

##### 具体页面示意：

1. 如图，先配置全局配置以及页面数量。

   ![image-20210909163040029](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20210909163040029.png)

2. 在具体页面中添加组件，配置组件顺序以及组件功能的具体配置。

   ![setting](C:\Users\simple\Desktop\新建文件夹 (5)\setting.png)

   左边为可选组件，右边为具体组件的配置。

##### 技术分析：

1. 归纳贴合业务需求的组件列表，以及具体组件配置。

2. 在移动端预览工程中以配置为组件的接口写组件。

3. 上线预览工程

4. 配置页面中用<iframe>标签内嵌预览工程项目，通过iframe即时传递组件配置表完成在线编辑预览等。![image-20210909164525192](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20210909164525192.png)

5. 完成后根据**通用的组件配置表**写真正的客户端h5工程。![image-20210909164948496](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20210909164948496.png)

   预览效果以及URL：![image-20210909165032987](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20210909165032987.png)

   可以看到，page_id即为改页面配置表的参数，**预览工程/平台工程/客户端工程三个项目都共用同一套配置表**。

   ![image-20210909165221946](C:\Users\simple\AppData\Roaming\Typora\typora-user-images\image-20210909165221946.png)

6. 客户端h5工程中包括：

   - 固有的个人中心
   - 固有的登录页
   - 个性化的其他页面

##### 总结：

预览工程可以省略，与平台工程合为一个。



