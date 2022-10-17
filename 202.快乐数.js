/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

function getNext(n) {
	let totalSum = 0
	while (n > 0) {
		let d = n % 10
		n = Math.floor(n / 10)
		totalSum += d * d
	}

	return totalSum
}
var isHappy = function(n) {
	const seen = new Set()
	while (n !== 1 && !seen.has(n)) {
		seen.add(n)
		n = getNext(n)
	}
	return n === 1
};

isHappy(19)
// @lc code=end

