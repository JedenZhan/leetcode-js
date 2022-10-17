/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
	let flag = false;
	function helper(node, start = 0) {
		if (!node) return
		start += node.val
		if (!node.left && !node.right && start === targetSum) {
			flag = true
		}
		helper(node.left, start)
		helper(node.right, start)
	}
	helper(root)
	return flag
};
// @lc code=end

