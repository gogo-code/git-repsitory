/**
 * 4=>5=>1=>9 5 4=>1=>9
 * 解题思路：
 * 1.将被删除节点的值改为下个节点的值
 * 2.删除下个节点
 */
var deleteNode =function(node) {
  node.val=node.next.val;
  node.next=node.next.next;
}