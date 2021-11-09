module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js'
        },
    },
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器
    devServer: {
        // proxy: 'http://localhost:4000'
        proxy: {
            'api': {
                target: 'http://localhost:4000',
                pathRewrite:{'^/api':''},
                ws: true,
                changeOrigin: true
            }
        }
    }
}