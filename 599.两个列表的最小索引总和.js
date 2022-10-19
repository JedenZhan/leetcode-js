/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

// 哈希表记录,索引, 找到最小值
var findRestaurant = function (list1, list2) {

	const map = new Map(), res = []
	let minIndex = Number.MAX_SAFE_INTEGER
	list1.forEach((l, i) => {
		map.set(l, i)
	})

	list2.forEach((l, j) => {
		if (map.has(l)) {
			const i = map.get(l)
			if (i + j < minIndex) {
				res.length = 0
				res.push(list2[j])
				minIndex = j + i
			} else if (i + j === minIndex) {
				res.push(list2[j])
			}
		}
	})

	return res
};
// @lc code=end

