const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'],
    mode: 'production',
    //whatch : true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    },
    output: {
        filename: 'js/app.bundle.js ',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        port: 9000,
        open: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true, //Espacios en blanco
                removeComments: true, //Comentarios
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css'
        }),

    ]
};
