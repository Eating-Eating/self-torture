## <a id="whatis">构建一个serverless过程</a>
- 群公告
  🌲通知：

  1.下载wrangler 初始化项目新建ServerLess项目 Typescript版本
  2.申请接口私钥 coinmarketcap.com/
  3.代码定时1分钟取1次接口数据，存储为KV或者DurableObjects
  https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=%E7%BA%BF%E4%B8%8A%E5%8E%BB%E7%94%B3%E8%AF%B7%E7%A7%98%E9%92%A5&convert=USDT

  027,1839为 ETH、BNB的ID

  4.接口返回数据结构{
   ETH:价格,
   BNB:价格
  }
  5.使用pages连通接口
  6.如果有域名请切换pages、dev域名
  7.登录https://travis-ci.com/ 完成Ci线上部署

  志佳老师



1. 如何自动做伸缩扩展

2. 如何做到高并发

3. serverless可能被回收
   * 造成阻塞
   * 服务挂了
4. 

ajv+ts验证格式

## <a id="issue">缺陷/优化</a>

1. 冷启动
   * 阿里云：js编译为字节码
   * cloudflare：v8层面的优化
   * 

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

svelte：**No Runtime**、**Samll**、**高性能**、**更少的代码**、**单测不友好**、**生态不完善**、**数组映射脏数据更新**

vue

