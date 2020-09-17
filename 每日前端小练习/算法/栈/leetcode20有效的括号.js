/**
 * 解题思路：
 * 0.如果括号数为奇数，直接为假
 * 1.新建一个栈
 * 2.扫描字符串遇到左括号入栈，遇到和栈顶括号类型匹配的右括号出栈，如果不匹配返回假
 * 3.栈空了才为真，否则为假
 */
var isvalid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === '(' && c === ')') ||
        (t === '{' && c === '}') ||
        (t === '[' && c === ']')
      )
        stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
};
