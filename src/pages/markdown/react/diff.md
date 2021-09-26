## <a id="whatis">是什么</a>
根据当前fiber中new children来决定diff策略

1. 单节点diff
   - key
   - tag type
2. 多节点diff：更新、移动、新增、删除
   - 处理更新节点
   - 处理不属于更新的节点

key的作用：主要是辨别节点是否可以复用

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

