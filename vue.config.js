module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
      title: 'vue-table-for Examples'
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-table-for/'
    : '/',
  outputDir: 'docs',
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
    if (process.env.NODE_ENV !== 'production') {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    }
  }
}
