/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * function totalFruit(fs: number[]): number {
    let n = fs.length, ans = 0
    const cnts = new Array<number>(n + 10).fill(0)
    for (let i = 0, j = 0, tot = 0; i < n; i++) {
        if (++cnts[fs[i]] == 1) tot++
        while (tot > 2) {
            if (--cnts[fs[j++]] == 0) tot--
        }
        ans = Math.max(ans, i - j + 1)
    }
    return ans
}
 */
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
	const n = fs.length
	let ans = 0
	const cnts = new Array(n + 10).fill(0)
	for (let i = 0, j = 0, tot = 0; i < n; i ++) {
		if (++cnts[fs[i]] === 1) tot ++
		while (tot > 2) if (-- cnts[fs[j ++]] === 0) tot --
		ans = Math.max(ans, i - j + 1)
	}
	return ans
};
// @lc code=end

