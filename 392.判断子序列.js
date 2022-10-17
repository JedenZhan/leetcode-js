/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (s.length > t.length) return false
	const reg = new RegExp(s.split('').join('.*'))
	return reg.test(t)
};
// @lc code=end

