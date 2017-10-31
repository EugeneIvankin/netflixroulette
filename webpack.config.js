var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            //{ test: /\.js$/, loader: 'react-hot-loader', exclude: /node_modules/},
            { test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins: ['transform-runtime']
                    }
                }
            },
            { test: /\.css$/,
                use: ["style-loader", "css-loader"]
                //use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader"})
            }
        ]
    }
};
