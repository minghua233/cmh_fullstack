const ceo = {
  name: 'ceo',
  age: 20,
  carrer: 'coder'
}

const jiushen = {
  name: 'jiushen',
  age: 21,
  carrer: 'coder'
}

function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

const user = new User(name, age, career)

function Coder(name, age) {
  this.name = name,
    this.age = age,
    this.career = 'coder',
    this.work = ['写代码', '写系分', '修bug']
}

function ProductManager(name, age) {
  this.name = name,
    this.age = age,
    this.career = 'pm',
    this.work = ['定会议室', '写PRD', '催更']
}

function Factory(name, age, career) {
  let work
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修bug']
      break
    case 'pm':
      work = ['定会议室', '写PRD', '催更']
      break
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break
    // ...
  }
  return new User(name, age, career, work)
}