/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
	const bits = n.toString(2)

	for (let i = 1; i < bits.length; i++) {
		if (bits[i] === bits[i - 1]) return false
	}
	return true
};
// @lc code=end

