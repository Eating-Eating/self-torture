## <a id="new">New</a>
1. 创建一个空对象（newObj），将该对象的\_proto\_绑定到到构造函数的prototype
2. 以这个对象（newObj）作为this执行构造函数
3. 构造函数执行后有返回对象就返回，否则返回创造的对象（newObj）

```javascript
const newOperation = (ctor,...args)=>{
    let newObj = Object.create(ctor.prototype)
    let newResult = ctor.call(newObj,...args)
    return typeof res === 'newResult' ? res : obj;
}
```

## <a id="apply-call">Apply/call</a>

区别，apply第二个参数为数组，call为无限个参数。

1. 为第一个参数obj创造一个属性fn，值为this（这个this指向的是调用函数，因为函数也是对象，这个函数调用myCall的时候，myCall的this指向该函数）
2. 执行函数，保存结果result
3. 为obj删除这个属性
4. 返回result

```javascript
Function.prototype.myCall = (context = window,arg)=>{
    const fn = symbol()
    context[fn] = this
    const result = context[fn](...arg)
    delete context[fn]
    return result
}
```



