class People {
  // 在最顶层定义属性

  constructor(name, age) {
    this.name = name;
    this.age = age;
    // 避免死循环
    this._sex = -1;
  }
  // 如果要在读和写数据做一些业务逻辑
  get sex() {
    //属性
    if (this._sex === 1) return 'male';
    else if (this._sex === 0) return 'female';
    else return 'error';
  }
  set sex(val) {
    //1:male 0:female
    if (val === 0 || val === 1) this._sex = val;
  }
  showName() {
    console.log(this.name);
  }
  // static count=2;不支持
  static getCount(){
    return 4;
  }
}
let p1 = new People('zuoguoliang', 11);
console.log(p1);
console.log(p1.sex);
console.log(People.getCount());

class Coder extends People {
  constructor(name, age, company) {
    // 继承父类的属性
    super(name, age);
    this.company = company;
  }
  showCompany() {
    console.log(this.company);
  }
}
let c1 = new Coder('zhangsan', 25, 'imooc');
console.log(c1);

c1.showName();
c1.showCompany();
console.log(Coder.getCount());