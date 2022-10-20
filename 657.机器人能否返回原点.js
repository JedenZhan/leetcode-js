/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function (moves) {
	let start = [0, 0]

	for (let i = 0; i < moves.length; i++) {
		const m = moves[i], [r, u] = start

		if (m === 'L') start[0] = r + 1
		if (m === 'R') start[0] = r - 1
		if (m === 'U') start[1] = u + 1
		if (m === 'D') start[1] = u - 1
	}


	return start[0] === 0 && start[1] === 0
};


// @lc code=end

