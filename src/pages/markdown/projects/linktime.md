## <a id="whatis">是什么</a>
一个可预览的电子月刊编辑站+移动端电子月刊

客户端要求实现翻页效果，每页内容排版需要由品牌部单独调整。

## <a id="issue">缺陷/优化</a>

初始化需要完全读取数据后初始化turnjs导致白屏时间过长：分屏加载，封面封底单独请求后用loading提示加载中。

由于需要翻页效果且期刊内容不固定，所以更灵活的配置，不将内容入表保存，由json字符串形式传递，前端自行解析。

用具名插槽配置固定内容，如页眉，标题等，通过css控制两端效果一致。

通过字符串传递的方式容易引起xss攻击，所以限制内网访问+仅传递类名以及文字的方式。

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>



