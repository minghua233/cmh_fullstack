http: 超文本传输协议，协议  固定的格式

输入url -> 看到页面

GET www.baidu.com HTTP/1.1
user-agent: xxx IE/chrome


上面这个格式 放到 传输层（TCP，HTTP基于TCP，另外一个叫UDP）去

拿到响应

HTTP/1.1 200 ok
connect-type: text/html
key: value

<doctype html>
<html>
<body>
百度一下
</body>
<html>

块级
- 独占一行
- 能设置宽高
(BFC): 块级格式上下文

行内
- 水平方向都在一行上面
- 垂直方向: 以当前行的基线(base-line)对齐
- 非置换元素不能设置宽高
- 置换元素能设置宽高
- 

img -> 行内 -> 设置宽高
置换元素: 
内容不受css控制
```html
<img src="" /><!-- 由src决定 -->
<canvas></canvas><!-- 默认宽高300*150 -->
<input/>
<iframe src=""></iframe>
<script src=""></script>
```

非置换元素
```html
<div>
  <div></div>
</div>
<span>文字</span>
```

词法(静态)作用域: js c c++
动态作用域: bash
