## <a id="whatis">构建一个serverless过程</a>
any->unknown->{}

常用类：

```typescript
PropertyKey // keyof any

```



## <a id="keywords">基本关键字</a>

1. interface 开发第三方接口(SDK  vue 整体对外的types)

   ``` typescript
   interface A {
       log(str:string):boolean
   }
   ```

2. type 写业务（逻辑）

   ```typescript
   type A1 = string | number | boolean
   ```

3. abstract class A3 {} 抽象类

   ```typescript
   abstract class A3{
       log(str:string):boolean{
           console.log(str);
           return true
       }
       abstract info():void; //抽象方法
   }
   // 使用：
   class A5 extends A3{
       // 重写抽象方法
       info():void{
           console.log(123132)
       }
   }
   ```

   

4. class A4 implements A 正常类

## <a id="scenario">应用场景</a>

大型应用

## <a id="replacement">代替方案</a>

svelte：**No Runtime**、**Samll**、**高性能**、**更少的代码**、**单测不友好**、**生态不完善**、**数组映射脏数据更新**

vue

