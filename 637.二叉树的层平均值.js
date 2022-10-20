/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	let averages = [], stack = [root]
	console.log(levelOrder(root))
	while (stack.length) {
		let sum = stack.reduce((a, b) => a + b.val, 0)
		averages.push(sum / stack.length)
		stack = stack.reduce((a, b) => {
			b.left && a.push(b.left)
			b.right && a.push(b.right)
			return a
		}, [])
	}

	return averages
};


function levelOrder(root) {
	let stack = [root], res = []
	while (stack.length) {
		stack.forEach(v => res.push(v.val))

		stack = stack.reduce((a, b) => {
			b.left && a.push(b.left)
			b.right && a.push(b.right)
			return a
		}, [])
	}

	return res
}
// @lc code=end

