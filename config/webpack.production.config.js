// 引入插件
var ExtractText = require("extract-text-webpack-plugin");
var CleanPlugin = require("clean-webpack-plugin");
var HtmlPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var UglifyPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: {
        // 生产环境的作用:在指定的本地目录生成入口文件
        main: './main.js',
        main2: "./main2.js"
    },  // 入口
    output: {   // 输出
        // path设置生产环境生成本地文件的目录
        path: __dirname + "/../dist",
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
                // use: ['style-loader', 'css-loader']
                use: ExtractText.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
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
        new ExtractText("./index.css"),
        new CleanPlugin("./dist"),
        new HtmlPlugin({
            template: "./index.html"
        }),
        // new UglifyPlugin(),
        new webpack.optimize.CommonsChunkPlugin("common"),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    resolve: {
        extensions: [".js", ".css"],
        alias: {
            "@":  __dirname+"/../components"
        }
    },
    // ??????
    externals: {
        'jquery': 'jQuery'
    },
    // 使用webpack-dev-server启动服务
    // devServer: {
    //     // contentBase:__dirname+"/dist",
    //     compress: true,
    //     port: 9000,
    //     open:true,
    //     hot: true,
    //     inline:true
    //     // hotOnly: true
    // }
}