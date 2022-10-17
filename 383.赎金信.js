/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	if (ransomNote.length > magazine.length) return false;

	const cnt = new Array(26).fill(0)
	const base = 'a'.charCodeAt()
	for (const c of magazine) {
		cnt[c.charCodeAt() - base]++
	}
	for (const c of ransomNote) {
		let i = --cnt[c.charCodeAt() - base]
		if (i < 0) return false
	}
	return true
};
// @lc code=end

