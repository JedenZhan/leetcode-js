/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
	let a = 0, l = 0
	for (let i = 0; i < s.length; i++) {
		const t = s[i]
		if (l === 3 || a === 2) return false
		if (t === 'A') a++
		if (t === 'L') l++
		else l = 0
	}
	return a < 2 && l < 3
};
// @lc code=end

