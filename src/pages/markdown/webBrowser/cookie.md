## <a id="whatis">是什么</a>
keywords:['same-site','domain','prefix','path','secure']

当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 `Set-Cookie`选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过 `Cookie`请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

Cookie 主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie前缀：

使用 Cookie 前缀的主要目的在于使用 Cookie 名称取代 Cookie 属性。

> __Secure-：告诉浏览器需要设置 Secure 属性。
>
> __Host-：告诉浏览器同时需要设置 Path=/ 和 Secure 属性，同时不应当设置 Domain 属性。

广告追踪原理：

当托管网页的服务器设置第一方 Cookie 时，该页面可能包含存储在其他域中的服务器上的图像或其他组件（例如，广告横幅），这些图像或其他组件可能会设置第三方 Cookie。第三方服务器可以基于同一浏览器在访问多个站点时发送给它的 cookie 来建立用户浏览历史和习惯的配置文件。

## <a id="issue">缺陷/优化</a>

引起中间人攻击：设置secure属性，只通过https传输

XSS攻击：设置HttpOnly属性，限制js访问cookie。

CSRF攻击：

1. 设置domain属性，`Domain` 指定了哪些主机可以接受 Cookie。如果不指定，默认为 `origin`，**不包含子域名**。如果指定了`Domain`，则一般包含子域名。因此，指定 `Domain` 比省略它的限制要少。

   例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如`developer.mozilla.org`）。

2. 设置Path属性，`Path` 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 `%x2F` ("/") 作为路径分隔符，子路径也会被匹配。

   例如，设置 `Path=/docs`，则以下地址都会匹配：

   - `/docs`
   - `/docs/Web/`
   - `/docs/Web/HTTP`

3. 设置SameSite属性，SameSite 可以有下面三种值：

   - **`None`**。浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。
   - **`Strict`。**浏览器将只在访问相同站点时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文 “Cookie 的作用域” 所述）
   - **`Lax`。**与 **`Strict`** 类似，但用户从外部站点导航至URL时（例如通过链接）除外。 在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到URL时才会发送。如 link 链接

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

会话信息：JWT

## 参考资料

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies