/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let res = []
	const m = a.length - 1, n = b.length - 1
	let i = 0, curry = 0
	while (i < a.length || i < b.length) {
		let r = Number(a[m - i] || 0) + Number(b[n - i] || 0) + curry
		if (r >= 2) {
			curry = 1
			r = r - curry * 2
		}
		else curry = 0
		res.unshift(r)
		i ++
	}
	return curry ? `${curry}${res.join('')}` : res.join('')
};

// console.log(addBinary('1111', '1000'))

// @lc code=end

