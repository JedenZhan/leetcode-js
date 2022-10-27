/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 * 记住必须交换一次 能保持相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	const m = s.length, n = goal.length
	if (m !== n) return false
	const cnt1 = new Array(26).fill(0), cnt2 = new Array(26).fill(0)
	let sum = 0
	const base = 'a'.charCodeAt()
	for (let i = 0; i < n; i++) {
		const a = s[i].charCodeAt() - base, b = goal[i].charCodeAt() - base
		cnt1[a]++
		cnt2[b]++
		if (a !== b) sum++
	}

	let ok = false
	for (let i = 0; i < 26; i++) {
		if (cnt1[i] !== cnt2[i]) return false
		if (cnt1[i] > 1) ok = true // 是全一致的字符串
	}
	return sum === 2 || (sum === 0 && ok)
};
// @lc code=end

