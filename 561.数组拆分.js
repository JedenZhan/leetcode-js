/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
	nums.sort((a, b) => b - a)
	let res = 0
	for (let i = 1; i < nums.length; i += 2) {
		res += nums[i]
	};
	return res

}
// @lc code=end

