/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var kthGrammar = function (n, k) {
// 	let start = '0'
// 	for (let i = 1; i <= n; i++) {
// 		start = start.split('').map(v => {
// 			if (v === '0') return '01'
// 			if (v === '1') return '10'
// 		}).join('')
// 	}
// 	return start[k - 1]
// };

function kthGrammar(n, k) {
	if (n === 1) {
		return 0;
	}
	return (k & 1) ^ 1 ^ kthGrammar(n - 1, (k + 1) / 2);
};

// @lc code=end

