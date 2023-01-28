const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: '[name].bundle.js'
    },
    mode: 'development'
})