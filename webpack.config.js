var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
            {test: /\.css$/, loader: "style-loader!css-loader"},
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {warnings: false}
        // })
    ]
}