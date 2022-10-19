/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 哈希计数, 每个数字统计多少个, 然后计算个数差值为1的最多组合
var findLHS = function (nums) {

	let cnt = new Map()
	let ans = 0
	nums.forEach(n => {
		cnt.set(n, (cnt.get(n) || 0) + 1)
	})

	Array.from(cnt.keys()).forEach(key => {
		// console.log()
		if (cnt.has(key + 1)) {
			ans = Math.max(ans, cnt.get(key) + cnt.get(key + 1))
		}
	})

	return ans
};
// @lc code=end

