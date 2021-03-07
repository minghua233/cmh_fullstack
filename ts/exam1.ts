//interface 和 type 都是用来声明自定义类型的
// type可声明基本数据类型，联合类型，元组等类型
// interface用来声明引用类型
export type User = { // 类型
  name:string,
  age:number,
  occupation:string
};

export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);  // user参数