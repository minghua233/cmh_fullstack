// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = arr.concat()
// console.log(new_arr);
// 原始类型可被深拷贝，引用类型不可


// let arr = ['old', 1, true, null, undefined]
// let new_arr = arr.slice()
// console.log(new_arr);

// 不能识别undefined，不能拷贝函数
// let arr = [{ old: 'old' }, 1, true, null, undefined]
// let new_arr = JSON.parse(JSON.stringify(arr))
// arr[0].old = 'new'
// console.log(new_arr);
