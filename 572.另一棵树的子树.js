/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function preOrder(root) {
	const res = [], stack = []
	let cur = root

	while (stack.length || cur) {
		if (cur) {
			stack.push(cur)
			cur = cur.left
		} else {
			const node = stack.pop()
			res.push(node.val)
			cur = node.right
		}
	}

	return res
}
var isSubtree = function (root, subRoot) {
	const preRoot = preOrder(root).join('')
	const preSubRoot = preOrder(subRoot).join('')
	console.log(preRoot, preSubRoot)
	return preRoot.indexOf(preSubRoot) !== -1
};
// @lc code=end

