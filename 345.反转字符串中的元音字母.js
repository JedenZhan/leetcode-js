/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function (s) {
// 	const reg = /[a|e|i|o|u]/i

// 	const w = []
// 	for (let i = 0; i < s.length; i++) {
// 		if (reg.test(s[i])) {
// 			w.push(s[i])
// 		}
// 	}
// 	const res = s.split('')

// 	for (let i = 0; i < res.length; i++) {
// 		if (reg.test(res[i])) {
// 			res[i] = w.pop()
// 		}
// 	}

// 	console.log(w, res)

// 	return res.join('')
// };

function reverseVowels(s) {

	const reg = /[a|e|i|o|u]/i
	const n = s.length
	const arr = s.split('')
	let i = 0, j = n - 1
	while (i < j) {
		if (reg.test(s[i])) {
			if (reg.test(s[j])) {
				[arr[i], arr[j]] = [arr[j], arr[i]]
				i++
				j--
			} else {
				j--
			}
		} else if (reg.test(s[j])) {
			if (reg.test(s[i])) {
				[arr[i], arr[j]] = [arr[j], arr[i]]
				i++
				j--
			} else {
				i++
			}
		} else {
			i++
			j--
		}
	}
	return arr.join('')
}

// @lc code=end

