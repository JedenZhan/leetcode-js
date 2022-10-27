/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 * 单调栈, 如果当前价格大于昨日价格, 一直出栈, 然后push今日价格和索引
 */

// @lc code=start

var StockSpanner = function () {
	this.stack = [[-1, Number.MAX_SAFE_INTEGER]]
	this.idx = -1
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
	this.idx++
	while (price >= this.stack.at(-1)[1]) this.stack.pop()

	let ret = this.idx - this.stack.at(-1)[0]
	this.stack.push([this.idx, price])
	return ret
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

