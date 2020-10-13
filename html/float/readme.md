# 浮动
使文本脱离文档流
文字不会受到脱离文档流受影响，实现文字环绕效果

# 清除浮动
1. 在最后一个浮动元素后面增加一个冗余元素，给它设置clear：both
2. 给父元素增加伪类
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
3. BFC

# margin重叠
1. bfc