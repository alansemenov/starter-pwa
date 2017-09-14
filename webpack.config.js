const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const workboxBuild = require('workbox-build');

const paths = {
    assets: 'src/main/resources/assets/'
};

const assetsPath = path.join(__dirname, paths.assets);

workboxBuild.injectManifest({
    swSrc: path.join(assetsPath, 'js/sw-dev.js'),
    swDest: path.join(assetsPath, 'sw.js'),
    globDirectory: assetsPath,
    globPatterns: ['bundle.*', 'manifest.json', 'browserconfig.xml']
});

module.exports = {

    entry: path.join(__dirname, paths.assets, 'js/main.js'),

    output: {
        path: path.join(__dirname, paths.assets),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.less']
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
        new extractTextPlugin('bundle.css')
    ]
    
};
