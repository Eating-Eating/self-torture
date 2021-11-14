## <a id="whatis">是什么</a>
双向绑定原理：

建立在mvvm模型基础上的：

数据层Model：应用的数据以及业务逻辑

视图层View：应用的展示效果，各类的UI组件等

业务逻辑层 ViewModel：负责将数据和视图关联起来

1. 数据变化后更新视图
2. 视图变化后更新数据

包含两个主要的组成部分

* 监听器 Observer：对所有的数据属性进行监听
* 解析器Compiler：对每个元素节点的指令进行扫描和解析，根据指令替换数据，绑定对应的更新函数

具体实现原理

1. new Vue() 执行初始化，对data通过Object.defineProperty进行响应化处理，这个过程发生在Observer中，每个key都会有一个dep实例来存储watcher实例数据
2. 对模板进行编译时，v-开头的关键词作为指令解析，找到动态绑定的数据，从data中获取数据并初始化视图，这个过程中发生在Compiler里，如果遇到了v-model，就监听input事件，更新data对应的数值
3. 

## <a id="issue">缺陷/优化</a>

CPU渲染瓶颈：同步更新改为可中断的异步更新

IO瓶颈：同步更新改为可中断的异步更新

阻止频繁的更新：useMemo，useCallback

关键词：可中断的异步更新，中间状态

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

svelte：**No Runtime**、**Samll**、**高性能**、**更少的代码**、**单测不友好**、**生态不完善**、**数组映射脏数据更新**

vue

