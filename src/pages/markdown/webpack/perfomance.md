## <a id="whatis">是什么</a>
keywords:['dev','prod','cache','delay','native code']

webpack的优化从2个角度进行：开发时、生产时。

三个角度提升开发环境编辑表现

1. 缓存
2. 延迟处理
3. native code
4. 压缩(生产)

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

# <a id="reference">引用</a>

GMTC前端构建提速的体系化思路：https://static001.geekbang.org/con/94/pdf/564637192/file/%E5%89%8D%E7%AB%AF%E6%9E%84%E5%BB%BA%E6%8F%90%E9%80%9F%E7%9A%84%E4%BD%93%E7%B3%BB%E5%8C%96%E6%80%9D%E8%B7%AF%20-%20%E9%99%88%E6%88%90.pdf

