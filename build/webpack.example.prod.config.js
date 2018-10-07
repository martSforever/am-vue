const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


process.env.NODE_ENV = 'production';
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../www'),
        publicPath: './',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            // vue: 'vue/dist/vue.runtime.js'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
        }),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/amvue.examples.min.css');
            },
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../www/index.html'),
            template: './examples/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
        }),
    ]
});
