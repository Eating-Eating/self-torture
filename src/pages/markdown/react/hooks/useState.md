## <a id="whatis">是什么</a>

本质是useReducer的语法糖
useReducer，接受两个参数，reducer以及initialState，返回state以及dispatcher
useState的action为BaseAction，只有一种action，所以不用传入reducer




#### 数据结构：

```js
function createHook(): Hook {
  return {
    memoizedState: null,

    baseState: null,
    queue: null,
    baseUpdate: null,

    next: null,
  };
}
```

### 流程

#### 初次渲染 ：
会在当前fiber形成一个hook树，由createHook函数创建。

Functional Component独有的更新方式。每个组件内，如果调用了hook，将会形成一个hooks调用链表

本质是useReducer的语法糖

### 流程

## <a id="issue">缺陷/优化</a>

CPU渲染瓶颈：同步更新改为可中断的异步更新

IO瓶颈：同步更新改为可中断的异步更新

阻止频繁的更新：useMemo，useCallback

关键词：可中断的异步更新，中间状态

## <a id="scenario">应用场景</a>

大型应用

## <a id="reference">引用</a>

深入理解 React useLayoutEffect 和 useEffect 的执行时机：https://blog.csdn.net/yunfeihe233/article/details/106616674

