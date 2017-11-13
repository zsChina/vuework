// 引入插件
var ExtractText = require("extract-text-webpack-plugin");
var CleanPlugin = require("clean-webpack-plugin");
var HtmlPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var UglifyPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: {
        bundle: './main.js',
        main: "./main2.js"
    },  // 入口
    output: {   //输出
        path: __dirname + "/dist",
        // filename: "[name].[hash].js"
        filename: "[name].js"
    },
    // 配置loader
    module: {
        // 
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // use: ExtractText.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{

                        }
                    }
                ]
            }
        ]
    },
    // 配置插件
    plugins: [
        // new ExtractText("index.css"),
        // new CleanPlugin("./dist"),
        new HtmlPlugin({
            template: "./index.html"
        }),
        // new UglifyPlugin(),
        new webpack.optimize.CommonsChunkPlugin("common"),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".js", ".css"],
        alias: {
            "@": __dirname + "/components/"
        }
    },
    // ??????
    // devtool: "cheap-eval-source-map",
    externals: {
        'jquery': 'jQuery'
    },
    // 使用webpack-dev-server启动服务
    devServer: {
        // contentBase:__dirname+"/dist",
        // compress: true,
        // port: 9000,
        open:true,
        hot: true,
        // inline:true
        // hotOnly: true
    },
}