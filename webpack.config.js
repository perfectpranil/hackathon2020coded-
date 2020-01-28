const path = require("path");

module.exports = [
    {
        target: "webworker",
        entry: {
            decoder: "./decoder.ts",
        },
        output: {
            path: __dirname,
            filename: "./dist/[name].bundle.js",
        },
        devtool: "source-map",
        externals: {
            three: "THREE",
        },
        resolve: {
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" },
            ]
        },
        performance: {
            hints: false
        },
        mode: "development"
    },
    {
        target: "webworker",
        entry: {
            "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
            "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker",
        },
        output: {
            path: __dirname,
            filename: "./dist/monaco-editor/[name].bundle.js",
        },
        devtool: "source-map",
        resolve: {
            extensions: [".webpack.js", ".web.js", ".ts", ".js"]
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" },
            ]
        },
        performance: {
            hints: false
        },
        mode: "development",
        externals: { '@microsoft/typescript-etw': 'FakeModule' }
    },
    {
        entry: {
            mapview: "./index.ts",
        },
        output: {
            path: __dirname,
            filename: "./dist/[name].bundle.js",
        },
        devtool: "source-map",
        externals: {
            three: "THREE",
        },
        resolve: {
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
            mainFields: ["browser", "main", "module"],
            alias: {
                "asn1.js": path.join(__dirname, "./node_modules/asn1.js/lib/asn1.js")
            }
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" },
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
                { test: /\.(png|jpg|gif|svg)$/, loader: "url-loader?limit=100000" }
            ]
        },
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                name: "common_chunks"
            }
        },
        mode: "development"
    }
]
