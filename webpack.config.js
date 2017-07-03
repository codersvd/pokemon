const env = process.argv.indexOf('-p') === -1 ? 'dev' : 'prod';
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const extractText = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const extractHtml = new HtmlPlugin({template: 'index.html', inject: false});
const extractLess = new extractText({filename: 'assets/[name].css'});

//dir src is for resource files
const srcDir = path.resolve(__dirname, 'client');
//dir dist is for resulting files
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: env === 'dev' ? 'source-map' : false,
    context: srcDir,
    entry: {
        app: './index.js'
        // other for http2 optimization
    },
    output: {
        filename: 'assets/bundle-[name].js',
        path: distDir,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: extractLess.extract({
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'less-loader'}
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        extractHtml,
        extractLess,
        autoprefixer
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

if (env === 'prod') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /.*\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
    );
}
