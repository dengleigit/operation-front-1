module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: `src/systems/${process.env.NODE_SYSTEM}/main.js`
    }
  },
  outputDir: `${process.env.NODE_SYSTEM}-dist`
}
