/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
	this.queue = new Array()
	this.copy = new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	return this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
	while (this.queue.length > 1) {
		this.copy.push(this.queue.shift());
	}
	const v = this.queue[0]
	this.queue = this.copy
	this.copy = []
	return v
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
	return this.queue.at(-1)
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return this.queue.length === 0;
};

// @lc code=end

