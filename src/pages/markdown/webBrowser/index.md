## <a id="whatis">是什么</a>
keywords:['构建dom树','构建cssom树','渲染','Style','Layout','Paint','Compositing','交互'，"重绘","重排","提升合成层","GUI渲染线程","JS引擎线程","事件触发线程","定时触发器线程","异步http请求线程","ssr","csr"."同构"]

### 运行时线程：

1. GUI渲染线程
   - 负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
   - 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
   - 注意，**GUI渲染线程与JS引擎线程是互斥的**，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中**等到JS引擎空闲时**立即被执行。
2. JS引擎线程
   - 也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）
   - JS引擎线程负责解析Javascript脚本，运行代码。
   - JS引擎一直等待着任务队列中任务的到来，然后加以处理，一个Tab页（renderer进程）中无论什么时候都只有一个JS线程在运行JS程序
   - 同样注意，**GUI渲染线程与JS引擎线程是互斥的**，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。
3. 事件触发线程
   - 归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）
   - 当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中
   - 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理
   - 注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）
4. 定时触发器线程
   - 传说中的`setInterval`与`setTimeout`所在线程
   - 浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）
   - 因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）
   - 注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。
5. 异步http请求线程
   - 在XMLHttpRequest在连接后是通过浏览器新开一个线程请求
   - 将检测到状态变更时，如果设置有回调函数，异步线程就**产生状态变更事件**，将这个回调再放入事件队列中。再由JavaScript引擎执行。

### 流程：

- [导航](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#导航)
- [响应](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#响应)
- [解析](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#解析)
- [渲染](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#渲染)
- [交互](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#交互)
- [See Also](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#see_also)

- 重绘：某些元素的外观被改变，例如：元素的填充颜色

- 重排：重新生成布局，重新排列元素。

- 有一些特定的属性和元素可以实例化一个层，包括`<video>`和`<canvas>`，任何CSS属性为opacity、3D转换、`will-change`的元素，还有一些其他元素。这些节点将与子节点一起绘制到它们自己的层上，除非子节点由于上述一个（或多个）原因需要自己的层。

  层确实可以提高性能，但是它以内存管理为代价，因此不应作为web性能优化策略的一部分过度使用。

### 渲染模式：

- SSR 服务端渲染
- Static Rendering 静态页面渲染(古老的客户端渲染方式)
- CSR客户端渲染
- 同构渲染：首屏的html页面由服务端提供，然后加载js，js利用现有的dom树来接管渲染后页面的交互操作，跳转到新页面时就变成纯CSR渲染。

## <a id="issue">缺陷/优化</a>

一旦renderLayer提升为了合成层就会有自己的绘图上下文，并且会开启硬件加速，有利于性能提升,里面列举了一些特点

- 合成层的位图，会交由 GPU 合成，比 CPU 处理要快
- 当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层
- 对于 transform 和 opacity 效果，不会触发 layout 和 paint

**注意：**

1. 提升到合成层后合成层的位图会交GPU处理，但请注意，仅仅只是合成的处理（把绘图上下文的位图输出进行组合）需要用到GPU，生成合成层的位图处理（绘图上下文的工作）是需要CPU。
2. 当需要repaint的时候可以只repaint本身，不影响其他层，但是paint之前还有style， layout,那就意味着即使合成层只是repaint了自己，但style和layout本身就很占用时间。
3. 仅仅是transform和opacity不会引发layout 和paint，那么其他的属性不确定。

总结合成层的优势：一般一个元素开启硬件加速后会变成合成层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。

**性能优化点：**

1. 提升动画效果的元素 合成层的好处是不会影响到其他元素的绘制，因此，为了减少动画元素对其他元素的影响，从而减少paint，我们需要把动画效果中的元素提升为合成层。 `提升合成层的最好方式是使用 CSS 的 will-change属性。从上一节合成层产生原因中，可以知道 will-change 设置为opacity、transform、top、left、bottom、right 可以将元素提升为合成层。`
2. 使用 transform 或者 opacity 来实现动画效果, 这样只需要做合成层的合并就好了。
3. 减少绘制区域 对于不需要重新绘制的区域应尽量避免绘制，以减少绘制区域，比如一个 fix 在页面顶部的固定不变的导航header，在页面内容某个区域 repaint 时，整个屏幕包括 fix 的 header 也会被重绘。`而对于固定不变的区域，我们期望其并不会被重绘，因此可以通过之前的方法，将其提升为独立的合成层。减少绘制区域，需要仔细分析页面，区分绘制区域，减少重绘区域甚至避免重绘。`

## <a id="reference">参考</a>

> 渲染页面：浏览器的工作原理：https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work
>
> Web网页渲染的几种模式：https://segmentfault.com/a/1190000022470322
>
> 浏览器渲染流程&Composite（渲染层合并）简单总结：https://segmentfault.com/a/1190000014520786
>
> 从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理:https://segmentfault.com/a/1190000012925872