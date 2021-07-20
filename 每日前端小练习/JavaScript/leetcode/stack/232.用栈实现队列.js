/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  // 入栈
  this.instack=[]
  // 出栈
  this.outstack=[]
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.instack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // 如果输出栈未空就要弹栈
  if(!this.outstack.length)  {
    while(this.instack.length) {
      this.outstack.push(this.instack.pop())
    }
  }
  return this.outstack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(!this.outstack.length)  {
    while(this.instack.length) {
      this.outstack.push(this.instack.pop())
    }
  }
  // peek和pop的区别在于peek不会在输出栈再弹栈
  return this.outstack[this.outstack.length-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.instack.length===0&&this.outstack.length===0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

