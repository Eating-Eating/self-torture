## <a id="whatis">是什么</a>
构建用户界面的Javascript库。

React16架构可以分为三层：

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入**Reconciler**
- Reconciler（协调器）—— 负责找出变化的组件
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

## <a id="issue">缺陷/优化</a>

CPU渲染瓶颈：同步更新改为可中断的异步更新

IO瓶颈：同步更新改为可中断的异步更新

阻止频繁的更新：useMemo，useCallback

关键词：可中断的异步更新，中间状态

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

> 一篇讲透自研的前端错误监控：https://juejin.cn/post/6987681953424080926#heading-10
>
> 如何实现一套多端错误监控平台：https://www.yuque.com/zaotalk/posts/mxx4cb#QUH0x

