```keymap
['testKeyMap','testKeyMap2']
```
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

## <a id="promise">Promise</a>

1. 三种状态
2. then解决过程
3. 订阅status，resolve发布执行过程。
4. 异步执行then

```javascript
class myPromise {
    constructor(fn){
        this.status = 'pending';
        this.value = null;
        this.reason = null;
        this.onFullfilledQueue = [];
        this.onRejectedQueue = [];
        try{
            fn(resolve,reject)
        }catch{
            reject(err)
        }
    }
    resolve(value){
        if(this.status === 'pending'){
            this.value = value;
            this.status = 'resolved'
            this.onFullfilledQueue.forEach(cb=>cb(this.value))
        }
    }
    reject(reason){
        if(this.status === 'pending'){
            this.reason = reason
            this.status = 'rejected'
            this.onFullfilledQueue.forEach(cb=>cb(this.value))
        }
        
    }
    then(onFullfilled,onRejected){
        if(this.status === 'onFullfilled'){
            const promise2 = new myPromise((rs,rj)=>{
                
            })
        }
        if(this.status === 'pending'){
        	const promise2 = new myPromise(reso)
            this.onFullfilledQueue.push(onFullfilled)
            this.onRejectedQueue.push(onRejected)
        }
    
    }
    resolvePromise(promise,x,resolve,reject){
        
    }
}
```

## <a id="debounce">防抖/节流</a>

1. 调用的是返回的函数
2. 利用闭包保存初始化时的父级变量

```javascript
// 基础版
function debounce(event, time){
    let timer = null
    let context = this
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
        	event.apply(context,args)
        },time)
    }
}
// 进阶版
function debounce(event,time,immediate){
    let timer = null;
    let context = this;
    return function(...args){
        if (!timer && immediate){
            event.apply(context,args)
            timer = 1
        }
        
    }
}
```

