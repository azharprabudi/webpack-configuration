var path = require('path');
var webpack = require('webpack');

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

var loaders = PRODUCTION
    ?   []
    :   [
            {
                test: /\.js$/,
                exclude: '/node_modules/',//pengecualian
                loaders: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]

module.exports =  {
    entry: entry,
    plugins: plugins,
    module: {
        loaders: loaders
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/build/', //agar bisa di akses ketika live di vps / hosting
        filename: 'bundle.js'
    }
};