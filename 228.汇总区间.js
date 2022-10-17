/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
	const res = []

	let start = nums[0]
	for (let i = 1; i <= nums.length; i++) {
		const cur = nums[i], prev = nums[i - 1]
		if (cur - prev === 1) continue
		else {
			res.push(`${start}${(prev === start || !prev) ? '' : `->${prev}`}`)
			start = cur
		}
	}
	return res
};
// @lc code=end

