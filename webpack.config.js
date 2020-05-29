const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: ['./src/js/index.js', './src/scss/main.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: "bundle.map",
        libraryTarget: 'var',
        library: 'main'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([{from: 'dist', to: '../../release/dist'}], {debug: 'debug'})
    ],
    watchOptions: {
        aggregateTimeout: 5000
    }
};
