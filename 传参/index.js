// js是按值传参的
// 1.基本数据类型传递的就是这个值
var a = 1
function test(a) {
  a = 2
  console.log(a)
}

console.log(a)
test(a)
// 2.引用数据类型传递点的是地址值（也是个值）
var a2 = { name: '张三' }
function f3(a2) {
  a2.name = '李四'
  console.log(a2)
  a2 = 2
  console.log(a2)
}
console.log(a2)
f3(a2)
// 总之，函数是按值传参的