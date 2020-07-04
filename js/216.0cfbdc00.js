(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{871:function(n,e){n.exports="### Contains Duplicate II\n\nGiven an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.\n\n```js\nExample 1:\n\nInput: nums = [1,2,3,1], k = 3\nOutput: true\n```\n\n```js\nExample 2:\n\nInput: nums = [1,0,1,1], k = 1\nOutput: true\n```\n\n```js\nExample 3:\n\nInput: nums = [1,2,3,1,2,3], k = 2\nOutput: false\n```\n\n### 解法\n\n* 遍历当前 nums, 维护一个队列 arr 来存储 k 个数值, 判断该队列 arr 中是否包含当前遍历值 nums[l];\n  * 若有, 则返回 true;\n* 若遍历结束, 则返回 false;\n\n```js\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar containsNearbyDuplicate = function(nums, k) {\n  const arr = []\n\n  let l = 0\n  let r = nums.length\n\n  while (l < r) {\n    if (arr.indexOf(nums[l]) > -1) {\n      return true\n    }\n    if (arr.length < k) {\n      arr.push(nums[l])\n    } else if (arr.length >= k && k > 0) {\n      arr.shift(arr[0])\n      arr.push(nums[l])\n    }\n    l++\n  }\n\n  return false\n}\n```\n\n![](http://with.muyunyun.cn/db151c5e5eef41a30b2e8cbca9fd417e.jpg-400)\n\n算法时间复杂度是 NlogN 级别的, 执行时间花了 1800ms。\n\n```js\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar containsNearbyDuplicate = function(nums, k) {\n  const temSet = new Set()\n\n  let l = 0\n  let r = nums.length\n\n  while (l < r) {\n    if (temSet.has(nums[l])) {\n      return true\n    }\n    if (temSet.size < k) {\n      temSet.add(nums[l])\n    } else if (temSet.size >= k && k > 0) {\n      temSet.delete(nums[l - k])\n      temSet.add(nums[l])\n    }\n    l++\n  }\n\n  return false\n}\n```\n\n![](http://with.muyunyun.cn/c756eba46d7c18d4fe4acfbc011e3a78.jpg-400)\n\n使用 Set 用同样的思路实验, 时间复杂度为 O(N), 其执行时间比之前用数组队列的实现快了很多。\n\n### Sister Title\n\n217、220"}}]);