/**
 * 浅拷贝实现思路：
 * 通过Object.assign实现，拷贝所有属性值到新的对象中
 * 但是属性如果是对象的话，该属性拷贝的是地址，
 * 那么在拷贝后，更改原对象的该属性的属性时就会更改拷贝对象就要用到深拷贝
 * 深拷贝实现方式
 * JSON.parse(JSON.stringify(object))
 */
// 浅拷贝
let obj = {
  a: 1,
  b: {
    foo: 'foo',
    bar: 'bar',
  },
};
let objCopy1 = Object.assign({}, obj);
console.log(objCopy1);
obj.a = 2;
console.log(objCopy1.a);
let objCopy2 = JSON.parse(JSON.stringify(obj));
obj.b.foo = 'FOO';
console.log(objCopy1.b.foo);
console.log(objCopy2.b.foo);
