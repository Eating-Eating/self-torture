## <a id="whatis">是什么</a>
keywords:['Broadcast Channe','LocalStorage','Service Worker','Shared Worker','Websocket']

#### 同源页面之间通讯：

对于同源页面，常见的方式包括：

- 广播模式：Broadcast Channe / Service Worker / LocalStorage + StorageEvent
- 共享存储模式：Shared Worker / IndexedDB / cookie
- 口口相传模式：window.open + window.opener
- 基于服务端：Websocket / Comet / SSE 等

#### 非同源：

通过嵌入iframe实现，iframe 与父页面间可以通过指定`origin`来忽略同源限制，因此可以在每个页面中嵌入一个 iframe （例如：`http://sample.com/bridge.html`），而这些 iframe 由于使用的是一个 url，因此属于同源页面，其通信方式可以复用上面第一部分提到的各种方式。



## <a id="issue">缺陷/优化</a>



## <a id="scenario">应用场景</a>

需要即时改变应用状态

## <a id="replacement">代替方案</a>



