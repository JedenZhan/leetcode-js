/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
	const res = []
	for (let i = 0; i < operations.length; i++) {
		const t = operations[i], num = Number(t)

		if (isNaN(num)) {
			if (t === 'C') res.pop()
			if (t === 'D') res.push(res.at(-1) * 2)
			if (t === '+') res.push(res.at(-1) + res.at(-2))
		} else {
			res.push(num)
		}
	}

	return res.length ? res.reduce((a, b) => a + b) : 0
};
// @lc code=end

