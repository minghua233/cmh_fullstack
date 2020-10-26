# weui源码分析，并用stylus实现

- src dist
  src 源码目录
  dist 编译过后
  weui.styl 入口文件
  
- css框架是70%常见业务
  1. reset 样式重置
  2. stylus 变量是替换关系

    ```stylus
      $weuiFontEN = -apple-system-font, 'Helvetica Neue'
      $weuiFontSans = 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei'
      $weuiFontDefault = $weuiFontEN, $weuiFontSans
    ```
