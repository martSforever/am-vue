const langs = [
  'zh-CN',
  'en-US',
]

export default langs.reduce((ret, item) => {
  ret[item] = require(`./${item}`)
  return ret
}, {})
