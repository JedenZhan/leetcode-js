/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
function preOrder(root) {
	const ans = [], stack = [root]
	while (stack.length) {
		const r = stack.pop()
		ans.push(r.val)
		r.right && stack.push(r.right)
		r.left && stack.push(r.left)
	}

	return ans
}

function midOrder(root) {
	const stack = [], ans = []
	let cur = root
	while (stack.length || cur) {
		if (cur) {
			stack.push(cur)
			cur = cur.left
		} else {
			const node = stack.pop()
			ans.push(node.val)
			cur = node.right
		}
	}

	return ans
}
var getMinimumDifference = function (root) {
	const arr = midOrder(root)
	let min = Number.MAX_SAFE_INTEGER
	arr.reduce((a, b) => {
		min = Math.min(b - a, min)
		return b
	})
	return min
};
// @lc code=end

