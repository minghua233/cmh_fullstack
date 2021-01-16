function showCase(value) {
  switch (value) {  // switch 内部使用严格模式判断 === 
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case 'C':
      console.log('Case C');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}

// 使用new创建的为String对象
showCase(new String('A')) // 输出Do not know!

showCase(String('A')) // 输出Case A