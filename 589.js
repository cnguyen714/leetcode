/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let stack = [root];
  let order = [];

  while(stack.length > 0) {
    let top = stack.pop();
    order.push(top.val);
    for(i = top.children.length - 1; i >= 0; i--) {
      stack.push(top.children[i]);
    }
  }
  return order;
};

