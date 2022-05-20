const path = require("path")

module.exports = {
    entry: {
        app: "./src/js/app.js"
    },
    output: {
        path: path.join(__dirname, "/src/js"),
        filename: "app.processed.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }

        ]
    }
}