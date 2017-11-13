// 引入插件

// "dev":"webpack-dev-server --config config/webpack.dev.config.js",
// "pro":"webpack --config config/webpack.production.config.js"
// webpack-dev-server 执行开发版本模式
// webpack 执行生产版本模式
var ExtractText = require("extract-text-webpack-plugin");
var CleanPlugin = require("clean-webpack-plugin");
var HtmlPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var UglifyPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: {
        // 开发环境的作用:在指定入口路径缓存中生成入口文件
        // 入口文件的当前目录指向package.json的绝对路径;
        main: './main.js'
    },
    output: {
        // 只要设置了热替换并使用webpack-dev-server启动就会在devServer指定目录的缓存下生成缓存文件而不会去path下去生成
        path: __dirname + "/../dist",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "url-loader"
            },
            {
                test: /\.js$/,
                use: "babel-loader"
                // use: [{
                //     loader: 'babel-loader'
                // }]
            }
        ]
    },
    devtool: 'inline-source-map',
    // 配置插件
    plugins: [
        //  CommonsChunkPlugin 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
        new webpack.optimize.CommonsChunkPlugin("common"),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".js", ".css"],
        alias: {
            "@": __dirname + "/../components/",
        }
    },
    externals: {
        'jquery': 'jQuery'
    },
    devServer: {
        // 如果不设定默认目录为package,json所在文件目录
        // contentBase:__dirname+"/dist",  //contentBase指定服务的本地路径, __dirname为当前文件(config)的绝对路径
        compress: true,
        port: 9000,
        // 该端口指向contentBase的指向,默认当前(package.json文件目录)
        open: true,
        // 默认打开当前环境下的index.html文件
        hot: true,
        inline: true
    }
}