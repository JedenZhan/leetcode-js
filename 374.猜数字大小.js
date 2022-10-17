/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let start = 1, end = n
	while (start < end) {
		let t = start + ((end - start) >> 1)
		const res = guess(t)
		if (res <= 0) {
			end = t
		} else {
			start = t + 1
		}
	}
	return end
};
// @lc code=end

