var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION 
    ?   [ './src/index.js' ]
    :   [
            './src/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3000'
        ];

var plugins = PRODUCTION
    ?   []
    :   [
            new webpack.HotModuleReplacementPlugin()
        ]

module.exports =  {
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif)$/,
                loaders: ['url-loader?limit=10000&name=../images/[hash:12].[ext]'],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            title: 'Belajar webpack',
            hash: true,
            filename: '../../index.html'
        }) 
    ],
    output: {
        path: path.resolve(__dirname, '../build/js/'),
        publicPath: '/build/js/', //agar bisa di akses ketika live di vps / hosting
        filename: PRODUCTION ? '[hash:12].js' : 'bundle.js'
    },
    devtool: 'source-map'
};