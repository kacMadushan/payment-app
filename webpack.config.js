const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            jquery: './node_modules/jquery/dist/jquery.js'
        }
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.(?:le|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: './node_modules/jquery/dist/jquery.js',
            jQuery: './node_modules/jquery/dist/jquery.js'
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};