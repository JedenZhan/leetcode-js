/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
	if (num === 0) return '0'
	const ans = [], base = '0'.charCodeAt()
	for (let i = 7; i >= 0; i--) {
		const val = (num >> (4 * i)) & 0xf
		if (ans.length > 0 || val > 0) {
			const digit = val < 10 ? String.fromCharCode(base + val) : String.fromCharCode('a'.charCodeAt() + val - 10)
			ans.push(digit)
		}
	}
	return ans.join('')
};
// @lc code=end

