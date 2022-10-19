/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
	let count = 0
	while (students.length && count < students.length) {
		const student = students.shift()
		if (student === sandwiches[0]) {
			sandwiches.shift()
			count = 0
		} else {
			students.push(student)
			count++
		}
	}
	return students.length
};
// @lc code=end

