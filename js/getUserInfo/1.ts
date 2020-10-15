// es6 箭头函数
const getUserInfos2 = (user:{name: string, sex: string, company:string}) => {
    // return true
    return `${user.name} 性别${user.sex} 就职于${user.company}`
    
}
console.log(getUserInfos2({name: '任康华', sex: '男', company: '字节'},))

