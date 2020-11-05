# 默认绑定

this所处的词法作用域在哪里生效了，this的作用域就指向哪里

在严格模式下，全局对象无法进行默认绑定，导致this只能绑定在undefined上

# 隐式绑定

当一个函数引用有上下文对象时，隐式绑定的规则就会把函数调用中的this绑定到这个上下文对象

- 隐式丢失
是被隐式绑定的函数丢失绑定对象

# 显示绑定
call  apply   bind


# 判断this
- 判断this指向可以按照下面的顺序来进行判断

- 函数是否在new中调用（new绑定）？如果是的话this绑定的就是新创建的对象，var demo = new fn()
- 函数是否通过call、apply或bind绑定调用（显式绑定）？如果是的话this绑定的是指定的对象（bind的多次绑定只有第一次是有效的）var demo = fn().call(obj)
- 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话this绑定的是哪个上下文对象，var demo = obj.fn()
- 如果都不是的话，就是默认绑定，严格模式下就是undefined，非严格模式下就是windwos，var demo = fn()