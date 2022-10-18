/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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

function mid(root) {
	const stack = [], cur = root

	while (stack.length || cur) {
		if (root) stack.push(root.left)

	}
}
var findMode = function (root) {
	let base = 0, count = 0, maxCount = 0
	let ans = []

	function update(x) {
		if (x === base) count++
		else {
			count = 1
			base = x
		}
		if (count === maxCount) ans.push(base)
		if (count > maxCount) {
			maxCount = count
			ans = [base]
		}
	}

	function dfs(r) {
		if (!r) return
		dfs(r.left)
		update(r.val)
		dfs(r.right)
	}

	dfs(root)

	return ans
};
// @lc code=end

