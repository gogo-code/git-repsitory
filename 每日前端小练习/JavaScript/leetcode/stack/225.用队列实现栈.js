/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.inqueue=[]
  this.outqueue=[]
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.inqueue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if(!this.outqueue.length) {
    while(this.inqueue.length) {
      this.outqueue.unshift(this.inqueue.shift())
    }
  }
  return this.outqueue.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.inqueue.length) {
      this.outqueue.unshift(this.inqueue.shift())
    }
  return this.outqueue[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.outqueue.length&&!this.inqueue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

