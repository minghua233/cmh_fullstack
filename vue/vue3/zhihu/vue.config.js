module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: 'http://api.vikingship.xyz/api/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warning: false,
      errors: false
    }
  }
}