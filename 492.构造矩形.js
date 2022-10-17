/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
	const t = Math.sqrt(area)
	if (t % 1 === 0) return [t, t]
	let ans
	for (let i = 1; i < t + 1; i++) {
		const x = area / i
		if (x % 1 === 0) ans = x > i ? [x, i] : [i, x]
	}
	return ans
};

// @lc code=end

