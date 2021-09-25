## <a id="whatis">是什么</a>

## Functional Component层面：
1. 用useCallback缓存复杂计算函数
2. 用useMemo缓存组件或者数据
3. 正确填写useEffect的依赖项，减少useEffect函数中setState数量，useEffect与useState的相互嵌套意味着多次重绘 


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

