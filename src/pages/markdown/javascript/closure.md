## <a id="whatis">是什么</a>
keywords:['什么时候调用，什么时候创建执行上下文','VO/AO','[[scope]]','']



ECMAScript中，闭包指的是：

1. 从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。
2. 从实践角度：以下函数才算是闭包：
   1. 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
   2. 在代码中引用了自由变量

重点：即时父级/其他上下文已经销毁，在引用变量中的函数中作用链中仍然保存了fatherContext.AO的引用，所以会造成内存泄漏

### 执行上下文

JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。



关键考点：什么时候调用，什么时候创建执行上下文

#### 可执行代码种类(即需要创建执行上下文的代码)：
- 全局代码
- 函数代码
- eval代码

准备执行前创建执行上下文并压入执行上下文栈中,ps:栈底是globalContext

#### 执行上下文的属性：
- 变量对象(VO,Variable object)
- 作用域链(Scope chain)
- this

AO就是活动的VO（不同生命周期）

##### AO的属性

变量对象会包括：

1. 函数的所有形参 (如果是函数上下文)
   - 由名称和对应值组成的一个变量对象的属性被创建
   - 没有实参，属性值设为 undefined
2. 函数声明
   - 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
   - 如果变量对象已经存在相同名称的属性，则完全替换这个属性
3. 变量声明
   - 由名称和对应值（undefined）组成一个变量对象的属性被创建；
   - 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

eg：

```javascript
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);
```

在进入执行上下文(准备阶段)后，这时候的 AO 是：

```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：

```javascript
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

##### 作用域链：

当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

所以包括当前AO/VO以及父级[[scope]]，父级同理。



## <a id="replacement">参考</a>

JavaScript深入之执行上下文栈：https://github.com/mqyqingfeng/Blog/issues/4
JavaScript深入之变量对象：https://github.com/mqyqingfeng/Blog/issues/5