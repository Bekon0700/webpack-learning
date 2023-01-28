const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
require('dotenv').config();

const mode = process.env.MODE || 'development';
let pluginsList;

if(mode == 'production') {
    pluginsList = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '[name].html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/index.[contenthash].css'
        })
    ]
} else if(mode == 'development') {
    pluginsList = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '[name].html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/index.css'
        }),
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
                        // publicPath: './dist'
                    }
                },'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|ico)$/,
                type: 'asset/resource',
                // use: [
                //     {
                //         options: {
                //             outputPath: '../images/',
                //             name: '[name].[ext]',
                //         }
                //     }
                // ]
            }
        ]
    },
    plugins: pluginsList,
}