var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.component.ts$/, loader: 'ts-loader!angular2-template-loader'},
            {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader'},
            {test: /\.html$/, loader: 'html-loader'}, // оставлю. предположим, пишем и на html, и на pug
            {test: /\.styl$/, loaders: ['css-to-string-loader', 'css-loader', 'stylus-loader']},
            {test: /\.(pug|jade)$/, loader: 'pug-loader'},
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader"}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css', '.pug', '.styl', '.jpg', '.png']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/
            // path.resolve(__dirname, 'doesnotexist/')
            // path.resolve('dfsdfdsffs', 'doesnotexist/')
        )
    ]
};
