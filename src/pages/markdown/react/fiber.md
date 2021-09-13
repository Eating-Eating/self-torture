## <a id="whatis">是什么</a>
['fiber reconciler','fiber node','fiber linked list','fiber tree']

<u>**Fiber架构**</u>的三层含义

1. 作为架构来说，之前`React15`的`Reconciler`采用递归的方式执行，数据保存在递归调用栈中，所以被称为`stack Reconciler`。`React16`的`Reconciler`基于`Fiber节点`实现，被称为`Fiber Reconciler`。
2. 作为静态的数据结构来说，每个`Fiber节点`对应一个`React element`，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息。
3. 作为动态的工作单元来说，每个`Fiber节点`保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）。

##  

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

