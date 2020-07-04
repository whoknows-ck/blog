(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{912:function(n,s){n.exports="[题目](https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1016/)\n\n题目演变:\n\n* s1 的排列方式有几种?\n* 将 s1 的所有排列打印出来?\n\n顺着这个思路, 想到了递归。\n\n上面这种思路也是可以的, 但是最终用判断字符中各字母出现的数字来实现。\n\n### Analyze\n\n```js\n/** 18.12.08 */\n/**\n * @param {string} s1\n * @param {string} s2\n * @return {boolean}\n */\nvar checkInclusion = function (s1, s2) {\n  const s1Obj = {}\n  const s1Length = s1.length\n  for (let i = 0; i < s1Length; i++) {\n    if (s1Obj[s1[i]]) {\n      s1Obj[s1[i]] = ++s1Obj[s1[i]]\n    } else {\n      s1Obj[s1[i]] = 1\n    }\n  }\n\n  const s2Length = s2.length\n\n  if (s1Length > s2Length) {\n    return false\n  }\n\n  const count = s2Length - s1Length\n  let str = ''\n\n  for (let i = 0; i <= count; i++) {\n    str = s2.slice(i, s1Length + i)\n    const s2Obj = {}\n    for (let z = 0; z < str.length; z++) {\n      if (!s1Obj[str[z]]) {\n        i = i + z\n        break\n      }\n      if (s2Obj[str[z]]) {\n        s2Obj[str[z]] = s2Obj[str[z]] + 1\n      } else {\n        s2Obj[str[z]] = 1\n      }\n    }\n\n    let bool = true\n    for (let y = 0; y < Object.keys(s1Obj).length; y++) {\n      if (s2Obj[Object.keys(s1Obj)[y]] !== s1Obj[Object.keys(s1Obj)[y]]) {\n        bool = false\n        break\n      }\n    }\n\n    if (bool === true) {\n      return true\n    }\n  }\n\n  return false\n};\n```"}}]);