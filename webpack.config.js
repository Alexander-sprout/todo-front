const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
require('dotenv').config()
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'), // точка входа, о которой говорилось ранее.
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        })
    ], // used for hot reloading when developing
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/, // сопоставляет файлы .js, .ts, и .tsx 
                loader: 'babel-loader', // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    mode: 'development',
    devServer: {
        host: process.env.DEV_SERVER_HOST,
        port: process.env.DEV_SERVER_PORT,
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': {
                target: process.env.BACKEND_HOST,
                secure: false,
                changeOrigin: true
            }
        }
    },
}