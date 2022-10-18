/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const ans = []
	const reg1 = /^[qwertyuiop]*$/i
	const reg2 = /^[asdfghjkl]*$/i
	const reg3 = /^[zxcvbnm]*$/i
	words.forEach(word => {
		if (reg1.test(word) || reg2.test(word) || reg3.test(word)) ans.push(word)
	})
	return ans
};
// @lc code=end

