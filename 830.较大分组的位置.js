/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
	const res = []
	let start = 0, cur = 1
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) cur++
		else {
			if (cur >= 3) {
				res.push([start, i - 1])
			}
			start = i
			cur = 1
		}
	}
	if (cur >= 3) res.push([start, s.length - 1])
	return res
};
// @lc code=end

