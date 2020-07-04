(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{831:function(n,t){n.exports="### Title\n\n给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。\n\n你可以假设每种输入只会`对应一个答案`。但是，你不能重复利用这个数组中同样的元素。\n\n示例:\n\n```js\n给定 nums = [2, 7, 11, 15], target = 9\n```\n\n因为 nums[0] + nums[1] = 2 + 7 = 9\n所以返回 [0, 1]\n\n### Analyze\n\n题解 1: 暴力法\n\n```js\nvar twoSum = function(nums, target) {\n  var length = nums.length\n  for (var x = 0; x < length; x++) {\n    for (var y = x + 1; y < length; y++) {\n      if (nums[x] + nums[y] === target) {\n        var arr = []\n        arr.push(x)\n        arr.push(y)\n        return arr\n      }\n    }\n  }\n}\n```\n\n* 时间复杂度: O(n^2)\n* 空间复杂度: O(1)\n\n题解 2-1: 哈希表\n\n思路:\n\n> 需要留意的是, 如果数组中有重复的值比如 [5, 5], target = 10 这种情况的处理\n\n* 遍历一次数组, 查询当前`哈希表`中是否有和当前索引值 `nums[i]` 对应的匹配值 `target - nums[i]`;\n  * 若有, 则返回它们两个值的索引;\n  * 若没有, 则将当前索引值和下标存入哈希表中;\n\n```js\nvar twoSum = function(nums, target) {\n  let numsObj = {}\n  for (let i = 0; i < nums.length; i++) {\n    let current = nums[i]\n    let match = target - current\n    if (match in numsObj) {\n      return [i, numsObj[match]]\n    }\n    numsObj[current] = i\n  }\n}\n```\n\n* 时间复杂度: O(n)\n* 空间复杂度: O(n)\n\n题解 2-2: 使用 Map, 思路同哈希表\n\n```js\nvar twoSum = function(nums, target) {\n  var map = new Map()\n\n  for (let i = 0; i < nums.length; i++) {\n    const targetValue = target - nums[i]\n    const getTargetValue = map.get(targetValue)\n    if (typeof(getTargetValue) === 'number') {\n      return [i, getTargetValue]\n    }\n    map.set(nums[i], i)\n  }\n}\n```\n\n* 时间复杂度: O(n)\n* 空间复杂度: O(n)\n\n### Sister Title\n\n15、16、18"}}]);