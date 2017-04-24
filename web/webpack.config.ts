import * as webpack from 'webpack';
import * as path from 'path';
import * as StyleLintPlugin from 'stylelint-webpack-plugin';
import * as FixDefaultImportPlugin from 'webpack-fix-default-import-plugin';
import { TsConfigPathsPlugin, CheckerPlugin } from 'awesome-typescript-loader';

export default <webpack.Configuration>{
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'index.tsx')
    ],
    devServer: {
        publicPath: '/',
        contentBase: __dirname,
        hot: true,
        historyApiFallback: true,
        inline: true,
        compress: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        path: path.join(__dirname, '../dist/web'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'tslint-loader?emitErrors=false&failOnHint=false',
            exclude: /node_modules/,
            enforce: 'pre'
        }, {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /(node_modules).+\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new CheckerPlugin(),
        new TsConfigPathsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new StyleLintPlugin({
            syntax: 'scss',
            context: __dirname
        }),
        new FixDefaultImportPlugin(),
        new webpack.ProvidePlugin({
           jQuery: 'jquery'
        })
    ]
};