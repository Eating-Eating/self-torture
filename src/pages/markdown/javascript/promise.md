## <a id="whatis">是什么</a>
keywords:['状态','then方法','onFufilled状态','then返回值']

初始化构造函数，注册then以及catch，then方法返回新的promise以形成链式调用

### promise接收参数

函数，其中有resolve跟reject方法。

### 状态

1. `pending`: 一个promise在resolve或者reject前就处于这个状态。
2. `fulfilled`: 一个promise被resolve后就处于`fulfilled`状态，这个状态不能再改变，而且必须拥有一个**不可变**的值(`value`)。
3. `rejected`: 一个promise被reject后就处于`rejected`状态，这个状态也不能再改变，而且必须拥有一个**不可变**的拒绝原因(`reason`)。

### then方法

#### OnFufilled/OnRejected参数

- 如果 `onFulfilled` /`onRejected` 不是函数，其必须被忽略
- 当 `promise` 执行结束后其必须被调用，其第一个参数为 `promise` 的终值/拒因`value`
- 在 `promise` 执行结束前其不可被调用
- 其调用次数不可超过一次

#### 多次调用

`then` 方法可以被同一个 `promise` 调用多次

- 当 `promise` 成功执行时，所有 `onFulfilled` 需按照其注册顺序依次回调
- 当 `promise` 被拒绝执行时，所有的 `onRejected` 需按照其注册顺序依次回调

#### 返回

`then` 方法必须返回一个 `promise` 对象。

```javascript
promise2 = promise1.then(onFulfilled, onRejected); 
```

- 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则运行 **Promise 解决过程**：`[[Resolve]](promise2, x)`
- 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝执行，并返回拒因 `e`
- 如果 `onFulfilled` 不是函数且 `promise1` 成功执行， `promise2` 必须成功执行并返回相同的值
- 如果 `onRejected` 不是函数且 `promise1` 拒绝执行， `promise2` 必须拒绝执行并返回相同的据因



## <a id="scenario">应用场景</a>

大型应用

## <a id="reference">引用</a>

手写一个Promise/A+,完美通过官方872个测试用例：https://segmentfault.com/a/1190000023157856

