## <a id="whatis">是什么</a>
keywords:["reducer","action","state","store","dispatch"]

函数式编程的思想：reduce，中文可以叫折叠、归约

如果将列表看做是一把展开的扇子，列表中的每个元素看做每根扇骨，则 `reduce` 的过程也即扇子从左到右不断折叠（归约、累积）的过程。当扇子完全合上，一次折叠也即完成。

中心思想：创造一个可追朔的state变化流，每次提交action即为合一次扇子，返回的新状态即为下一次action用到的state。

必须是纯函数：每次输入必须得到相同的结果，所以对于中间件来说，实际上store提供的thunk是在action之前，但我们一般通过dispatch发起action，所以真实的步骤是在dispatch之后，action之前。

<img src="https://awps-assets.meituan.net/mit-x/blog-images-bundle-2017/15f65e33.png"/>

## <a id="issue">缺陷/优化</a>

1. 对于组件：基于props取合适的state
2. 对于reducer：浅拷贝返回新state触发变化判断

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

svelte：**No Runtime**、**Samll**、**高性能**、**更少的代码**、**单测不友好**、**生态不完善**、**数组映射脏数据更新**

vue

