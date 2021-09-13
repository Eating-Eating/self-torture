## <a id="whatis">是什么</a>
缩写flex: 0 1 auto

### 伸缩方式：

	flex-grow: 0; // 增长比例，子项合计宽度小于容器宽度，需要根据每个子项设置的此属性比例对剩下的长度进行分配
	flex-shrink: 1; // 回缩比例，子项合计宽度大于容器宽度，需要根据每个子项设置的此属性比例对多出的长度进行分配
	flex-basis: auto; // 设置了宽度跟宽度走，没设置宽度跟内容实际宽度走
### 排列方式

- justify-content
- align-items
- flex-direction
- flex-wrap
- align-self

## <a id="issue">缺陷/优化</a>

CPU渲染瓶颈：同步更新改为可中断的异步更新

IO瓶颈：同步更新改为可中断的异步更新

阻止频繁的更新：useMemo，useCallback

关键词：可中断的异步更新，中间状态

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

svelte：**No Runtime**、**Samll**、**高性能**、**更少的代码**、**单测不友好**、**生态不完善**、**数组映射脏数据更新**

vue

