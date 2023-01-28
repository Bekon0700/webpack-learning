const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/[name].[contenthash].bundle.js',
        assetModuleFilename: 'assets/imgs/[name][ext]'
    },
    mode: 'production'
})