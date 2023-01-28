const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'dev'
let pluginsList;

if(mode == 'production') {
    pluginsList = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../../[name].html'
        }),
        new MiniCssExtractPlugin({
            filename: '../css/index.[contenthash].css'
        })
    ]
} else if(mode == 'dev') {
    pluginsList = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../../[name].html'
        }),
        new MiniCssExtractPlugin({
            filename: '../css/index.css'
        })
    ]
}

module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: './imgs'
                    }
                },'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../images/',
                            name: '[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: pluginsList,
}