/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
function getAdd(arr, pos) {
	const [x, y] = pos
	const nums = [arr[x][y]
		, arr[x - 1]?.[y]
		, arr[x]?.[y - 1]
		, arr[x - 1]?.[y - 1]
		, arr[x + 1]?.[y + 1]
		, arr[x + 1]?.[y]
		, arr[x]?.[y + 1]
		, arr[x + 1]?.[y - 1]
		, arr[x - 1]?.[y + 1]]
	let count = 0
	const add = nums.reduce((a, b) => {
		if (b !== undefined) count++
		return a + (b || 0)
	}, 0)

	return Math.floor(add / count)
}
var imageSmoother = function (img) {
	const m = img.length, n = img[0].length
	const res = new Array(m).fill(0).map(_ => 0).map(_ => new Array(n).fill(0))
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			res[i][j] = (getAdd(img, [i, j]))
		}
	}

	return res
};


// @lc code=end

