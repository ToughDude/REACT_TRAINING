const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = function (__env, argv) {
    return {
        devtool: 'cheap-module-source-map',
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'bundle.[contenthash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        ],
        devServer: {
            port: 1234
        },
        // optimization: {
        //     runtimeChunk: 'single',
        //     splitChunks: {
        //         cacheGroups: {
        //             vendor: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 name: 'vendors',
        //                 chunks: 'all'
        //             }
        //         }
        //     }
        // }

    }
}

