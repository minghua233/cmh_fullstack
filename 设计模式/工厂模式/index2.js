class OS {
  controlHardware() {
    // throw new Error('抽象工厂不允许直接调用，你需要将我重写')
  }
}

class AndroidOS extends OS {
  controlHardware() {
    console.log('我会用安卓的方式操作硬件');
  }
}

class AppleOS extends OS {
  controlHardware() {
    console.log('我会用安卓的方式操作硬件');
  }
}

// ————————————————————————————————
class Hardware {
  operateByOrder() {
    // throw new Error('抽象工厂不允许直接调用，你需要将我重写')
  }
}

class QualcommHardware extends Hardware {
  operateByOrder() {
    console.log('我会以高通的方式去运转');
  }
}

class KirinHardware extends Hardware {
  operateByOrder() {
    console.log('我会以麒麟的方式去运转');
  }
}

class FakeStar extends MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂不允许直接调用，你需要将我重写')
    return AndroidOS()
  }
  // 提供硬件
  createHardware() {
    // throw new Error('抽象工厂不允许直接调用，你需要将我重写')
    return QualcommHardware()
  }
}

const myPhone = new FakeStar()
const myOs = myPhone.createOS()
const myHardware = myPhone.createHardware()
myOs.controlHardware()
myHardware.operateByOrder()