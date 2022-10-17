/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
	const n = columnTitle.length
	let res = 0
	for (let i = n - 1; i >= 0; i--) {
		res += (columnTitle[i].charCodeAt() - 64) * Math.pow(26, n - i - 1)
	}
	return res
};

console.log(titleToNumber('AA'))
// @lc code=end

