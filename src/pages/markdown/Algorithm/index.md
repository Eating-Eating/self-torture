## <a id="time">时间复杂度</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.svg/1024px-Comparison_computational_complexity.svg.png"></img>

它定性描述该算法的运行时间。

「 **大O符号表示法** 」，即 T(n) = O(f(n))

通过「 大O符号表示法 」，这段代码的时间复杂度为：O(n) ，为什么呢?

在 大O符号表示法中，时间复杂度的公式是： T(n) = O( f(n) )，其中f(n) 表示每行代码执行次数之和，而 O 表示正比例关系，这个公式的全称是：**算法的渐进时间复杂度**。

## <a id="space">空间复杂度</a>

```javascript
// O(1)
let a = 1;
let b = 1;
...
// O(n)
let arr = new Array(n)
```

