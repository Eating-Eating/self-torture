## <a id="whatis">是什么</a>
keywords:["__proto__","prototype","Object.getPrototypeOf()","Object.setPrototypeOf()","遍历查找","create优化"]

JavaScript 只有一种结构：对象。每个实例对象（object）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype）。该原型对象也有一个自己的原型对象（__proto__），层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

几乎所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。

[[Prototype]] 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 __proto__。

## <a id="how">生成原型链</a>
1. create
2. setPrototypeOf()
3. 直接通过__proto__属性链接
4. Class

## <a id="performance">缺陷/性能问题</a>
在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻的情况下很重要。另外，试图访问不存在的属性时会遍历整个原型链。
### 优化：
1. 用hasOwnProperty方法查找对象自身属性/方法

## <a id="reference">参考</a>
继承与原型链：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


