/*
 * @lc app=leetcode.cn id=769 lang=javascript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
	const n = arr.length
	let ans = 0
	for (let i = 0, j = 0, min = n, max = -1; i < n; i++) {
		min = Math.min(min, arr[i])
		max = Math.max(max, arr[i])
		if (j === min && i === max) {
			ans++
			j = i + 1
			min = n
			max = -1
		}
	}
	return ans
};
// @lc code=end

