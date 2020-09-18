/**
 * 输入：inputs=[[],[1],[100],[3001],[3002]]
 * 输出：[null,1,2,3,3]
 * 解题思路
 * 有新请求就入队,在3000ms前发出的请求出队
 * 队列的长度就是请求次数
 * 
 */
var RecentCounter=function(){
  this.q=[];
}
RecentCounter.prototype.ping=function(t){
  this.q.push(t);
  while(this.q[0]<t-3000){
    this.q.shift();
  }
  return this.q.length;
}