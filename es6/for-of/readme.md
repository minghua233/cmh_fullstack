# for of

不能遍历对象
返回的是数组的元素

# for in

返回的都是数据结构的键值名
遍历数组返回的是下标
数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等
不仅可以遍历数字键名，还会遍历原型上的值
特殊情况下，遍历的顺序不会按照对象的顺序进行
