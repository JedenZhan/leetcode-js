/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let res = 0, cur = 0
	nums.forEach(n => {
		if (n === 1) cur++
		else {
			res = Math.max(res, cur)
			cur = 0
		}
	})
	return Math.max(cur, res)
};
// @lc code=end

