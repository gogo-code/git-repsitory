const User ={
  count:1,
  getCount:function(){
    return this.count
  }
}
console.log(User.getCount());
const func=User.getCount
console.log(func());