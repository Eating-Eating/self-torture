## <a id="whatis">是什么</a>
keywords:['新老架构对比','class组件与functional component对比']
构建用户界面的Javascript库。

React16架构可以分为三层：

- Scheduler（调度器，新）—— 调度任务的优先级，高优任务优先进入**Reconciler**
- Reconciler（协调器）—— 负责找出变化的组件
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

## <a id="progress">工作流程</a>

典型工作流程，Functional Component版在hook中

1. 创建更新：setState，ReactDom.render，forceUpdate
2. 任务调度
   1. beginWork
   2. mount/update
   3. reconcilieChildren
   4. commit
3. commit阶段
   1. commitBeforeMutationLifecycles：提交snapshot
   2. commit-all-host-effects：提交hostComopnent的side effect
   3. commit-all-lifecycles：提交所有组件的生命周期


## <a id="issue">缺陷/优化</a>

CPU渲染瓶颈：同步更新改为可中断的异步更新

IO瓶颈：同步更新改为可中断的异步更新

阻止频繁的更新：useMemo，useCallback

关键词：可中断的异步更新，中间状态

## <a id="scenario">应用场景</a>

大型应用

## <a id="reference">参考</a>

React源码解析：https://react.jokcy.me/

React技术揭秘：https://react.iamkasong.com/

