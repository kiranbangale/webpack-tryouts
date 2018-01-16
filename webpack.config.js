const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: __dirname + '/src/app/index.js', // Webpack entry point. Module to start building dependency graph

    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'bundle.js', // Name of generated bundle after build
        publicPath: '/' // Public URL of the output directory when referenced in a browser
    },

    module: { // Define file patterns and their loaders
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ],
                })
            },
        ]
    },

    plugins: [ // Plugins array to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + '/src/public/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('styles.css')
    ],

    devServer: { // Config of webpack-dev-server
        contentBase: './src/public', // Src of static assets
        port: 7700 // Port to run dev server
    }

};