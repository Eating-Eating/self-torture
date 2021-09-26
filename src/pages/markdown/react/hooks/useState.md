## <a id="whatis">是什么</a>
keywords:["updateQueue","basicStateReducer"]

本质是useReducer的语法糖
useReducer，接受两个参数，reducer以及initialState，返回state以及dispatcher
useState的reducer为basicStateReducer，只有一种action，所以不用传入reducer

```javascript
function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S {
  return typeof action === 'function' ? action(state) : action;
}
```


### 流程：
在hook上创造updateQueue，commit之后依次执行updateQueue上的action（此处容易产生bug，在使用useState传入非函数时依次调用state只会改变一次，比如连续若干次调用setState(count)）

#### 初次渲染 ：
会在当前fiber形成一个hook树，由createHook函数创建。

Functional Component独有的更新方式。每个组件内，如果调用了hook，将会形成一个hooks调用链表

本质是useReducer的语法糖

### 流程

## <a id="issue">缺陷/优化</a>

用useState传入常量时会陷入陷阱,因为传入常量时，action会被保存为常量，执行action链的时候不会改变，例如
```javascript
const [count,setCount] = useState(1)


const callback = ()=>{
  setState(count + 1)
  setState(count + 1)
  setState(count + 1)
  // 调用callback时会返回2
}

const callbackFixed = ()=>{
  setState(count=>count+1)
  setState(count=>count+1)
  setState(count=>count+1)
  // 调用callback时会返回4
}
```


## <a id="reference">引用</a>

react源码解析：https://react.jokcy.me/book/hooks/hooks-use-state.html

react库
