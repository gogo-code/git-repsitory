// 类
function People(name,age){
  console.log(this);
  // 实例属性，定义在构造函数里
  this.name=name
  this.age=age
  People.count++;
  People.getCount();
}
// 静态属性.直接定义在类里
People.count=0;

// 静态方法,this指向构造函数
People.getCount=function(){
    console.log(this);
    console.log('当前共有'+People.count);
}


// 实例方法
People.prototype.showName=function(){
  console.log('我的名字是'+this.name);
}
let p1=new People('zhansan',34)
console.log(p1);
p1.showName()

let p2=new People('zhang',20)
console.log(p2);

// 静态方法,当前方法和实例化对象没有关系
console.log(Math.max(3,4));
console.log(Math.random());

// 子类
function Student(name,color){
  // 构造函数继承
  People.call(this,name)//this指向Student，name指向people的属性
  this.color=color
}
// 原型继承
Student.prototype=new People()
Student.prototype.constuctor=Student

// 组合式继承，既能继承属性也能继承方法
let s1=new Student('sdjf','white')
console.log(s1);
s1.showName()