/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
	let total = 0
	for (let i = 1; i <= num >> 1; i++) {
		if (num % i === 0) total += i
	}
	return total === num
};
// @lc code=end

