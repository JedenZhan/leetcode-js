/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

var minDepth = function(root) {
	if (root === null) return 0
	if (root.left === null && root.right === null) return 1
	let m1 = minDepth(root.right)
	let m2 = minDepth(root.left)

	if (root.left === null || root.right === null) return m1 + m2 + 1
	return Math.min(m1, m2) + 1
};
// @lc code=end

