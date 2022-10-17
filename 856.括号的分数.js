/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const reg1 = /\(\)/g
  const reg2 = /\(\d+\)/
  let str = s.replaceAll(reg1, '1+')

  while (reg2.test(str)) {
    const matchStr = reg2.exec(str)?.[0]
    const inner = matchStr.slice(1, matchStr.length - 1).split('').reduce((a, b) => Number(a) + Number(b))
    str = str.replace(reg2, inner * 2)
  }
  console.log(str)
  // return Number(str)
};

scoreOfParentheses('()()')
// @lc code=end

