/**
 * 解题思路：
 * 反转两个节点：将n+1的next指向n
 * 反转多个节点：双指针遍历链表，重复上述操作
 * 解题步骤：
 * 双指针一前一后遍历链表
 * 反转双指针
 */
var reverseList=function(head){
  let p1 =head;
  let p2 =null;
  while(p1){
    // 3
    const tmp=p1.next;
    // 2
    p1.next=p2;
    // 1
    p2=p1;
    p1=tmp;
  }
  // 4
  return p2
}
