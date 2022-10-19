/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let res = 0, count = 0;
	[0, ...flowerbed, 0].forEach((f, i) => {
		if (count === 3) {
			res++
			count = 1
		}
		if (f === 0) {
			count++
		} else {
			count = 0
		}
	})

	if (count === 3) res++
	return res >= n
};

// @lc code=end

