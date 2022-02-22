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
            },
            '/ws': {
                ws: true,
                target: 'ws://localhost:8081'
            }
        }
    }
}