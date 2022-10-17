/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
	if (!root) return 0
	let res = 0
	const stack = [root]

	while (stack.length > 0) {
		const node = stack.pop()
		if (node.right) {
			stack.push(node.right)
		}
		if (node.left) {
			stack.push(node.left)
			if (!node.left.left && !node.left.right) {
				res += node.left.val
			}
		}
	}
	return res
};



function preOrder(root) {
	const stack = [root]
	const res = []
	while (stack.length) {
		const head = stack.pop()
		res.push(head.val)
		head.right && stack.push(head.right)
		head.left && stack.push(head.left)
	}
	return res
}


function inOrder(root) {
	const stack = [], res = []
	let cur = root
	while (cur || stack.length) {
		if (cur) {
			stack.push(cur)
			cur = cur.left
		} else {
			cur = arr.pop()
			res.push(cur.val)
			head = head.right
		}
	}
	return res
}

function posOrder(root) {
	const stack1 = [root], stack2 = [], res = []

	while (stack1.length) {
		const head = stack1.pop()
		stack2.push(head)
		head.left && stack1.push(head.left)
		head.right && stack1.push(head.right)
	}
	while (stack2.length) {
		res.push(stack2.pop().val)
	}
	return res
}
// @lc code=end

