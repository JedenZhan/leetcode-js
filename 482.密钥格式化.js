/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
	const n = s.length
	const res = []
	let str = ''
	for (let i = n - 1; i >= 0; i--) {
		const t = s[i]
		if (t === '-') continue
		str = `${t}${str}`
		if (str.length === k) {
			res.unshift(str.toUpperCase())
			str = ''
		}
	}
	str.length && res.unshift(str.toUpperCase())
	return res.join('-')
};
// @lc code=end

