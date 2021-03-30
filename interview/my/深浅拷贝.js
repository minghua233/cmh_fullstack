// 浅拷贝
const shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

// Object.assign 如果拷贝的属性是原始值类型，那么是深拷贝，如果是引用类型，那么是浅拷贝
// concat浅拷贝数组
// slice浅拷贝
// ...展开运算符  
let arr = [1, 2, 3];
let newArr = [...arr];//跟arr.slice()是一样的效果

// 深拷贝
// JSON.stringify()以及JSON.parse()它是不可以拷贝 undefined ， function， RegExp， Symbol
let deepCopy = function (obj) {
  if (typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}



