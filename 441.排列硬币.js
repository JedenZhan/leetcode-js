/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	let curry = 1, i = 0
	while (n >= curry) {
		n -= curry
		i++
		curry += 1
	}
	return i || 1
};
// @lc code=end

