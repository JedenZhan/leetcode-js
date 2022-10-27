/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
	const str = n.toString(2)

	let max = Number.MIN_SAFE_INTEGER, start
	for (let i = 0; i < str.length; i++) {
		console.log(max, start, i, str)
		if (str[i] === '1') {
			if (start) {
				max = Math.max(max, i - start)
			}
			start = i
		}
	}
	return Math.max(max, 0)
};


console.log(binaryGap(2342330))
// @lc code=end

