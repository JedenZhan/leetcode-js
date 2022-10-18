/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	const w = word.slice(1)
	return (w.toUpperCase() === w && word.slice(0, 1).toUpperCase() === word.slice(0, 1)) || w.toLowerCase() === w
};

detectCapitalUse('ggg')
// @lc code=end

