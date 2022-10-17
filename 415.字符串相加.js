/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let i = 1, curry = 0
	const ans = [], m = num1.length, n = num2.length
	while (i <= m || i <= n) {
		const a = num1[m - i] || 0, b = num2[n - i] || 0
		let res = Number(a) + Number(b) + curry
		if (res > 9) {
			curry = 1
			res = res - 10
		} else curry = 0
		ans.unshift(res)
		i++
	}
	if (curry) ans.unshift(curry)
	return ans.join('')
};

addStrings("9333852702227987", "85731737104263")
// @lc code=end

