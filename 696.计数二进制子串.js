/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 * 遍历字符串, 统计相同字符个数, 然后取两个之间的最小值
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
	const counts = []
	let total = 1
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) total++
		else {
			counts.push(total)
			total = 1
		}
	}
	counts.push(total)
	let ans = 0
	for (let i = 1; i < counts.length; i++) {
		ans += Math.min(counts[i], counts[i - 1])
	}

	return ans
};
// @lc code=end

