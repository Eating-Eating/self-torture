## <a id="whatis">是什么</a>
当 LocalStorage 变化时，会触发`storage`事件。利用这个特性，我们可以在发送消息时，把消息写入到某个 LocalStorage 中；然后在各个页面内，通过监听`storage`事件即可收到通知。注

## <a id="issue">缺陷/优化</a>

前后值相同不会触发storage事件：添加时间戳

## <a id="scenario">应用场景</a>

## <a id="replacement">代替方案</a>

