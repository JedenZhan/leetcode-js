/*
 * @lc app=leetcode.cn id=801 lang=javascript
 *
 * [801] 使序列递增的最小交换次数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*

基本分析
这是一道很裸的状态机 DP 运用题。

由于每次交换只会发生在两数组的相同位置上，使得问题变得简单：仅需考虑交换当前位置后，当前元素与前后元素大小关系变化即可。

又因为我们会从前往后处理每个位置，因此只需要考虑当前位置与前一位置的大小关系即可。

状态机 DP
定义 f[i][j] 为考虑下标范围为 [0,i] 的元素，且位置 i 的交换状态为 j 时（其中 j = 0 为不交换，j = 1 为交换）两数组满足严格递增的最小交换次数。

最终答案为 min(f[n−1][0],f[n−1][1])，同时我们有显而易见的初始化条件 f[0][0]=0 和 f[0][1] = 1，其余未知状态初始化为正无穷。

不失一般性考虑 f[i][j]该如何转移：

若 nums1[i]>nums1[i−1] 且 nums2[i] > nums2[i - 1]（即顺序位满足要求），此时要么当前位置 i 和前一位置 i - 1 都不交换，要么同时发生交换，此时有（分别对应两个位置「都不交换」和「都交换」）：
f[i][0] = f[i - 1][0]  f[i][1] = f[i - 1][1] + 1
{ 
f[i][0]=f[i−1][0]
f[i][1]=f[i−1][1]+1
​
 

若 nums1[i] > nums2[i - 1]nums1[i]>nums2[i−1] 且 nums2[i] > nums1[i - 1]nums2[i]>nums1[i−1]（即交叉位满足要求），此时当前位置 ii 和前一位置 i - 1i−1 只能有其一发生交换，此时有（分别对应「前一位置交换」和「当前位置交换」）：
\begin{cases} f[i][0] = \min(f[i][0], f[i - 1][1]); \\ f[i][1] = \min(f[i][1], f[i - 1][0] + 1) \end{cases}
{ 
f[i][0]=min(f[i][0],f[i−1][1]);
f[i][1]=min(f[i][1],f[i−1][0]+1)


*/
 function minSwap(nums1, nums2) {
	const n = nums1.length
	const f = new Array(n)
	f[0] = [0, 1]
	for (let i = 1; i < n; i++) f[i] = [n + 10, n + 10]
	for (let i = 1; i < n; i++) {
			if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
					f[i][0] = f[i - 1][0]
					f[i][1] = f[i - 1][1] + 1
			}
			if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
					f[i][0] = Math.min(f[i][0], f[i - 1][1])
					f[i][1] = Math.min(f[i][1], f[i - 1][0] + 1)
			}
	}
	return Math.min(f[n - 1][0], f[n - 1][1])
}

// @lc code=end

