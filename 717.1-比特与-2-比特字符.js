/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 * 遍历, 遇到0说明遇到一个字符, 遇到1说明遇到两个字符, 看最后是不是只剩一个
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
	if (bits.at(-1) === 1) return false
	let i = 0, n = bits.length
	while (i < n - 1) i += (bits[i] + 1)
	return i === n - 1
};
// @lc code=end

