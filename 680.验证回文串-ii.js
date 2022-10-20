/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	let low = 0, high = s.length - 1

	while (low < high) {
		let c1 = s.charAt(low), c2 = s.charAt(high)

		if (c1 === c2) {
			++low
			--high
		} else {
			return valid(s, low, high - 1) || valid(s, low + 1, high)
		}
	}

	return true
};

function valid(s, low, high) {
	for (let i = low, j = high; i < j; i++, j--) {
		let c1 = s.charAt(i), c2 = s.charAt(j)
		if (c1 !== c2) return false
	}
	return true
}
// @lc code=end

