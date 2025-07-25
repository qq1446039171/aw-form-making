const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,
  publicPath: './',
  // 修改输出目录为 docs
  outputDir: 'docs',
})
