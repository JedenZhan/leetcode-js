/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

class UnionFind {
	constructor(n) {
		this.group = new Array(n).fill(0)
	}

	find(n) {
		const group = this.group
		if (group[n] !== n) group[n] = this.find(group[n])
		return group[n]
	}

	union(m, n) {
		const group = this.group
		group[this.find(m)] = this.find(n)
	}

	query(m, n) {
		return this.find(m) === this.find(n)
	}
}


var possibleBipartition = function (n, dislikes) {
	const uf = new UnionFind(2 * n + 1)
	for (let i = 1; i <= 2 * n; i++) uf.group[i] = i

	for (const [a, b] of dislikes) {
		if (uf.query(a, b)) return false
		uf.union(a, b + n); uf.union(b, a + n)
	}

	return true
};

// class UnionFind {
// 	constructor() {
// 		this.p = new Array(4010).fill(0)
// 	}

// 	find(x) {
// 		const { p } = this
// 		if (p[x] !== x) p[x] = this.find(p[x])
// 		return p[x]
// 	}

// 	union(x, y) {
// 		const { p } = this
// 		p[this.find(x)] = p[this.find(y)]
// 	}

// 	query(x, y) {
// 		return this.find(x) === this.find(y)
// 	}
// }

// function possibleBipartition(n, ds) {
// 	const uf = new UnionFind()
//     for (let i = 1; i <= 2 * n; i++) uf.p[i] = i
//     for (const info of ds) {
//         const a = info[0], b = info[1]
//         if (uf.query(a, b)) return false
//         uf.union(a, b + n); uf.union(b, a + n)
//     }
//     return true
// }
// @lc code=end

