module.exports = {
    lintOnSave: false,

    devServer: {
        proxy: {
            '/': {
                ws: false,
                target: 'http://localhost:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
}