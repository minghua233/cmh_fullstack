<!-- 上 -->
# 定位
IP =》 DNS解析



























<!-- 下 -->
# 浏览器接收到html文件
1. 词法分析 =》 标记 =》node结构 =》DOM树
   
# 浏览器接收到css文件
步骤同上 =》 CSSOM树
递归CSSOM树确定具体元素到底是什么样式

# 渲染树
DOM树 + CSSOM树 = render树

渲染树只包含需要显示的节点


# 回流 
根据render树绘制页面布局


# 为什么操作DOM性能差？
1. 造成多线程通信
2. 可能引起重绘和回流
   
# 什么情况下会阻塞渲染
html，css
 <script src=""></script>


# 重绘和回流
回流：节点的几何信息发生变化
重绘：节点更改不影响布局的信息

回流一定会重绘，重绘不一定会回流

会导致性能的操作：
1. 改变window大小
2. 改变字体大小
3. display：none


# 减少重绘和回流
1. 用visibility代替display: none 
2. 不要把节点属性值放在一个for循环里当成循环的变量
   for (let i = 0; i < 1000; i++) {
      console.log(document.querySelector('.test').style.offsetTop);
    }
3. 尽量不要使用table布局

