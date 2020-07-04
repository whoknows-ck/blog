(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{925:function(n,t){n.exports="### 回溯法\n\n### Analyze\n\n```js\n/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar subsets = function (nums) {\n  const list = []\n  const tmpList = []\n\n  backTrack(list, tmpList, nums, 0)\n\n  return list\n};\n\nfunction backTrack(list, tmpList, nums, start) {\n  list.push(tmpList.slice())\n\n  for (let i = start; i < nums.length; i++) {\n    tmpList.push(nums[i])\n    backTrack(list, tmpList, nums, i + 1)\n    tmpList.splice(tmpList.length - 1, 1)\n  }\n}\n```"}}]);