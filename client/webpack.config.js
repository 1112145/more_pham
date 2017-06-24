var path = require("path");
// var webpack = require("webpack");


module.exports = {
    entry: "./main.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
     externals: {
        "jquery": "jQuery"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'src/jsx/actions'),
            components: path.resolve(__dirname, 'src/jsx/components'),
            containers: path.resolve(__dirname, 'src/jsx/containers'),
            reducers: path.resolve(__dirname, 'src/jsx/reducers'),
            ultils: path.resolve(__dirname, 'src/jsx/ultils'),
            css: path.resolve(__dirname, 'src/css'),
            models: path.resolve(__dirname, 'src/jsx/models'),
            pages: path.resolve(__dirname, 'src/jsx/pages')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
    
    ]
};
