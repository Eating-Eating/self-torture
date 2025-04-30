LangChain 在 AI 工程（尤其是 LLM 应用开发）领域越来越热门，面试中如果提到你使用过 LangChain，面试官往往会聚焦在以下几个方面：**LangChain 架构理解、组件拆分、具体项目实践、以及和外部工具/模型的结合能力**。

---

## 🔍 LangChain 常见面试问题大全（附思路）

### 🧱 基础理解类

1. **什么是 LangChain？它的核心解决了什么问题？**

   - LangChain 是一个用于构建基于大语言模型（LLM）的应用的开发框架。
   - 它抽象了一些关键能力：prompt 模版化、记忆机制、链式调用、工具集成等。

2. **LangChain 中有哪些核心组件？**
   - **LLMs**：调用模型（OpenAI、Cohere、Claude、LLaMA 等）
   - **Chains**：链式组合多个步骤（如 Prompt → Model → OutputParser）
   - **Agents**：带有“思考能力”的组件，可基于模型动态决定调用哪些工具。
   - **Tools**：提供操作的工具，如搜索引擎、数据库查询、计算器等。
   - **Memory**：对话历史记忆，可用于多轮对话。

---

### 🔗 Chain & Agent 机制类

3. **你能说说 Chain 和 Agent 的区别吗？**

   - **Chain** 是固定顺序的步骤执行流程，比如 Prompt → LLM → 输出。
   - **Agent** 是动态决策流程，根据用户输入决定用哪个 Tool（类似思维链）。

4. **你如何用 LangChain 实现一个自定义 Chain？**

   - 组合 PromptTemplate + LLM + OutputParser。
   - 可继承 `Chain` 基类，重写 `_call()` 方法。

   示例（简单 QA Chain）：

   ```python
   from langchain import LLMChain, PromptTemplate
   from langchain.chat_models import ChatOpenAI

   prompt = PromptTemplate.from_template("你是客服助手，问题是：{question}")
   chain = LLMChain(llm=ChatOpenAI(), prompt=prompt)
   ```

---

### 🧠 Memory 和多轮对话类

5. **LangChain 中 Memory 是如何工作的？你用过哪些？**

   - Memory 用于维护上下文历史，主要有：
     - `ConversationBufferMemory`
     - `ConversationSummaryMemory`
     - `VectorStoreRetrieverMemory`
   - 常用于 Chat Agent，支持多轮对话保持上下文。

6. **如何让 LangChain Agent 实现“带记忆的工具调用”？**
   - 初始化 Agent 时传入 Memory。
   - 使用 `initialize_agent(tools, llm, memory=..., agent=AgentType)`。

---

### 🔧 Tool 和外部调用类

7. **你集成过什么 Tool？LangChain 如何封装外部接口为 Tool？**

   - 可以封装搜索引擎、数据库、天气 API、Python 函数等。
   - 只需继承 Tool 类，重写 `run()` 方法或传函数作为 `tool.run`。

   示例：

   ```python
   from langchain.tools import Tool

   def search(query): return "搜索结果：" + query
   my_tool = Tool(name="WebSearch", func=search, description="搜索信息")
   ```

8. **你用 LangChain 做过 Agent + Tools 应用吗？具体场景是什么？**
   - 比如：客服问答机器人 + 资料库 + 工具搜索。
   - Agent 接收用户问题后，判断是否调用文档检索工具，或查实时数据。

---

### 📚 向量数据库 & RAG 类

9. **LangChain 如何和向量数据库结合？你用过哪些？**

   - 支持 Chroma, FAISS, Pinecone, Weaviate 等。
   - 使用 `VectorStoreRetriever` 做检索式生成（RAG）。
   - 通常使用 Embeddings + 文本切分器 (`RecursiveCharacterTextSplitter`) 建索引。

10. **你如何用 LangChain 实现一个基于文档的 QA 系统？**

- 主要流程：
  1.  加载文档（PDF/Text/网页）
  2.  切分为 chunks
  3.  转 Embedding → 存入向量库
  4.  用户提问 → 检索相关 chunks → 组合 prompt → 回答

---

### 🧠 Prompt Engineering + 进阶类

11. **LangChain 中 PromptTemplate 的优势？你怎么用？**

- 支持模板变量插入、格式化。
- 可嵌套用于链中各步骤，便于可控生成。

12. **如何用 LangChain 实现一个带函数调用的智能问答系统？**

- 可接入 OpenAI Function Calling。
- 或者用 LangChain Agent + Tool 调用本地/外部函数。

13. **LangChain 项目中你遇到过什么坑？怎么解决的？**

- 模型 token 限制 → Prompt 截断/摘要。
- Agent 工具执行慢 → 设置 `max_iterations` + 日志调试。
- 工具调用过度 → 加 `tool_choice` 限制。

---

### ⚙️ 工程实践类

14. **LangChain 项目你是怎么部署的？**

- 可以本地部署或接入 FastAPI、Flask。
- 结合 Streamlit / Gradio 做原型。
- 后端用 Docker 封装，模型接口（如 OpenAI）从环境变量配置。

15. **你如何监控或测试 LangChain 应用？**

- 使用 `langchain.debug = True` 打开调试。
- 集成 logging、Prometheus、Sentry。
- 模型响应快照保存，用于 A/B 测试。

---

## ✅ 总结一页题纲（可用于复习或面试准备）

| 类型          | 面试重点问题示例                         |
| ------------- | ---------------------------------------- |
| 核心架构      | LangChain 是什么、有哪些组件             |
| Chain & Agent | 如何实现多步骤流程、如何动态调用工具     |
| Memory        | 如何做多轮对话记忆、用过哪些 Memory 类型 |
| Tool 扩展     | 如何集成外部 API、你实现过哪些 Tool      |
| 向量数据库    | 如何做文档 QA / 检索式生成               |
| Prompt 设计   | PromptTemplate 如何构建、如何调试        |
| 项目部署      | 如何将 LangChain 应用上线、接入接口      |
| 进阶优化      | Token 限制、性能问题、工具调用频率控制   |

---

如果你告诉我你用 LangChain 做过的项目场景，我还能帮你把这些问题进一步「项目化」，比如整理成一份简历中可写的项目描述 + 面试亮点，要不要我来帮你整一版？
