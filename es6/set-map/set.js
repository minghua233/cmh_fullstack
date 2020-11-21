// let arr = [1, 2, 3, 2, 4, 1]

// let newArr = [...new Set(arr)]  // 解构赋值，并使用set进行去重，set不允许其数据结构中有重复项
//  console.log(newArr);  // 输出[1, 2, 3, 4]

// function test(color) {
//   switch (color) {
//     case 'red':
//       return ['apple', 'strawberry']
//     case 'yellow':
//       return ['banana', 'pear']
//     case 'green':
//       return ['watermelon']
//     default:
//       return []
//   }
// }

// console.log(test('yellow')); 



// const fruitColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pear'],
//   green: ['watermelon']
// }

// function test(color) {
//   return fruitColor[color] || []
// }

// console.log(test('yellow'));


// Map 设定值使用set方法，取值使用get方法
// let obj = new Map()
// let a = 1
// obj.set(a, 123)
// console.log(obj.get(a));

// const fruitColor = new Map()
//   .set('red', ['apple', 'strawberry'])
//   .set('yellow', ['banana', 'pear'])
//   .set('green', ['watermelon'])

// function test(color) {
//   return fruitColor.get(color)
// }

// console.log(test('red'));