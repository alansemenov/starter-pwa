var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!less-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('_styles.css')
    ]
    
};
