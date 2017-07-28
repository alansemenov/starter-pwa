var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

var paths = {
    assets: 'src/main/resources/assets/'
};

module.exports = {

    entry: path.join(__dirname, paths.assets, 'js/main.js'),

    output: {
        path: path.join(__dirname, paths.assets),
        filename: '_all.js'
    },

    resolve: {
        extensions: ['.js', 'less', '.css']
    },

    module: {
        rules: [
            {
                test: /.less$/,
                loader: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!less-loader"
                })
            }
        ]
    },
    plugins: [
        new extractTextPlugin('_all.css'),
        new workboxPlugin({
            globDirectory: paths.assets,
            globPatterns: [
                '_all.js',
                '_all.css'
            ],
            swDest: path.join(__dirname, paths.assets, 'sw.js'),
            skipWaiting: true
        })
    ]
    
};
