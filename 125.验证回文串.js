/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	const reg = /[^\w\n]|\_/g
	const str = s.replaceAll(reg, '').toLowerCase();
	const reverse = str.split('').reverse().join('');
	return str === reverse
};

console.log(isPalindrome('ab_a'))
// @lc code=end

