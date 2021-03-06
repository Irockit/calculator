const path = require('path');

module.exports = {
    entry: "./src/app.js",
    mode: 'development',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },{
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ],
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-evel-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
}