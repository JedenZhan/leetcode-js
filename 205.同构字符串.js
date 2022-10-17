/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	const n1 = s.length, n2 = t.length
	if (n1 !== n2) return false

	const s2t = new Map()
	const t2s = new Map()
	for (let i = 0; i < n1; i++) {
		const c1 = s[i], c2 = t[i]
		if ((s2t.has(c1) && s2t.get(c1) !== c2) || (t2s.has(c2) && t2s.get(c2) !== c1)) {
			return false
		}
		s2t.set(c1, c2)
		t2s.set(c2, c1)
	}
	return true
};

console.log(isIsomorphic('paper', 'title'))
// @lc code=end

