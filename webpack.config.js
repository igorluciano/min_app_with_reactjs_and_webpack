const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.(s?css|sass)$/,
                use: [ "style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        port: 3000
    }
};