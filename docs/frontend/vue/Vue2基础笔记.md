## Vue核心

### 模板语法

Vue模板语法包括两大类
**1**.插值语法
功能：用于解析标签体内容
写法：{{xxx}}，xxx 是 js 表达式，可以直接读取到 data 中的所有区域
**2.**指令语法 
功能：用于解析标签（包括：标签属性、标签体内容、绑定事件…）
举例：<a v-bind:href="xxx">或简写为<a :href="xxx">，xxx 同样要写 js 表达式，可以直接读取到 data 中的所有属性
备注：Vue中有很多的指令，且形式都是 v-xxx，此处只是拿v-bind举例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>模板语法</title>
    <!-- 引入Vue -->
    <script type="text/javascript" src="../js/vue.js"></script>
  </head>
  <body>

    <div id="root">
      <h2>插值语法</h2>
      <h4>你好，{{ name }}</h4>
      <hr />
      <h2>指令语法</h2>
      <a v-bind:href="tencent.url.toUpperCase()" x="hello">点我去看{{ tencent.name }}1</a>
      <a :href="tencent.url" x="hello">点我去看{{ tencent.name }}2</a>
    </div>
  </body>

  <script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
      el: '#root',
      data: {
        name: 'jack',
        tencent: {
          name: '开端',
          url: 'https://v.qq.com/x/cover/mzc00200mp8vo9b/n0041aa087e.html',
        }
      }
    })
  </script>
</html>
```

![](img/0001.jpg)



### 数据绑定

Vue中有2种数据绑定的方式
a.单向绑定v-bind数据只能从 data 流向页面
b.双向绑定v-model数据不仅能从 data 流向页面，还可以从页面流向 data
备注 
a.双向绑定一般都应用在表单类元素上，如 <input><select><textarea>等
b.v-model:value可以简写为v-model，因为v-model默认收集的就是value值

