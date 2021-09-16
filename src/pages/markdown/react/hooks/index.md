## <a id="whatis">是什么</a>

Functional Component独有的更新方式。每个组件内，如果调用了updateFunctionalComponent，将会形成一个单向的workInProgress对象链表，并且每次完成更新后都会将这个头节点存入fiber的memorizedState中后将头结点值为null，方便下次再来一次。这也是为什么hooks顺序不能乱的原因。





#### 数据结构：

```js
function createHook(): Hook {
  return {
    memoizedState: null,

    baseState: null,
    queue: null | {last:null | queue,dispath:dispatch},
    baseUpdate: null,

    next: null,
  };
}
```



#### useState

本质是useReducer的语法糖

### 流程

1. react 在 diff 后，会进入到 commit 阶段，准备把虚拟 DOM 发生的变化映射到真实 DOM 上在 commit 阶段的前期，会调用一些生命周期方法，对于类组件来说，需要触发组件的 getSnapshotBeforeUpdate 生命周期，对于函数组件，此时会调度 useEffect 的 create destroy 函数
2. 注意是调度，不是执行。在这个阶段，会把使用了 useEffect 组件产生的生命周期函数入列到 React 自己维护的调度队列中，给予一个普通的优先级，让这些生命周期函数异步执行
3. 随后，就到了 React 把虚拟 DOM 设置到真实 DOM 上的阶段，这个阶段主要调用的函数是 commitWork，commitWork 函数会针对不同的 fiber 节点调用不同的 DOM 的修改方法，比如文本节点和元素节点的修改方法是不一样的。
4. commitWork 如果遇到了类组件的 fiber 节点，不会做任何操作，会直接 return，进行收尾工作，然后去处理下一个节点，这点很容易理解，类组件的 fiber 节点没有对应的真实 DOM 结构，所以就没有相关操作
5. 但在有了 hooks 以后，函数组件在这个阶段，会同步调用上一次渲染时 useLayoutEffect(create, deps) create 函数返回的 destroy 函数
6. 注意一个节点在 commitWork 后，这个时候，我们已经把发生的变化映射到真实 DOM 上了
7. 但由于 JS 线程和浏览器渲染线程是互斥的，因为 JS 虚拟机还在运行，即使内存中的真实 DOM 已经变化，浏览器也没有立刻渲染到屏幕上
8. 此时会进行收尾工作，同步执行对应的生命周期方法，我们说的componentDidMount，componentDidUpdate 以及 useLayoutEffect(create, deps) 的 create 函数都是在这个阶段被同步执行。
9. 对于 react 来说，commit 阶段是不可打断的，会一次性把所有需要 commit 的节点全部 commit 完，至此 react 更新完毕，JS 停止执行
10. 浏览器把发生变化的 DOM 渲染到屏幕上，到此为止 react 仅用一次回流、重绘的代价，就把所有需要更新的 DOM 节点全部更新完成
11. 浏览器渲染完成后，浏览器通知 react 自己处于空闲阶段，react 开始执行自己调度队列中的任务，此时才开始执行 useEffect(create, deps) 的产生的函数

## <a id="issue">缺陷/优化</a>

CPU渲染瓶颈：同步更新改为可中断的异步更新

IO瓶颈：同步更新改为可中断的异步更新

阻止频繁的更新：useMemo，useCallback

关键词：可中断的异步更新，中间状态

## <a id="scenario">应用场景</a>

大型应用

## <a id="reference">引用</a>

深入理解 React useLayoutEffect 和 useEffect 的执行时机：https://blog.csdn.net/yunfeihe233/article/details/106616674

