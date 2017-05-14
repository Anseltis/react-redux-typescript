import * as path from 'path';
import * as Webpack from 'webpack';
import * as StyleLintPlugin from 'stylelint-webpack-plugin';
import * as FixDefaultImportPlugin from 'webpack-fix-default-import-plugin';
import { TsConfigPathsPlugin, CheckerPlugin } from 'awesome-typescript-loader';

export class CommonOptions {
    outputDirname: string;
    outputFilename: string;
    entryFileName: string;
}

export interface ConfigFactory<T extends Webpack.Configuration> {
    createConfig(): T;
}

export class CommonConfigFactory implements ConfigFactory<Webpack.Configuration> {

    protected dirname: string;
    protected options: CommonOptions;

    constructor(dirname: string, options: CommonOptions) {
        this.dirname = dirname;
        this.options = options;
    }

    createConfig(): Webpack.Configuration {
        return {
            devtool: this.devtool(),
            entry: this.entry(),
            resolve: this.resolve(),
            output: this.output(),
            module: this.module(),
            plugins: this.plugins()
        };
    }

    protected devtool(): any {
        return 'source-map';
    }

    protected entry(): string[] {
        return [
            path.join(this.dirname, this.options.entryFileName)
        ];
    }

    protected resolve(): Webpack.Resolve {
        return {
            extensions: ['.ts', '.js', '.tsx']
        };
    }

    protected output(): Webpack.Output {
        return {
            path: path.join(this.dirname, this.options.outputDirname),
            filename: this.options.outputFilename,
            publicPath: '/'
        };
    }

    protected module(): Webpack.Module {
        return {
            exprContextCritical: false,
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
            }, {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'
            }]
        };
    }

    protected plugins(): Webpack.Plugin[] {
        return [
            new CheckerPlugin(),
            new TsConfigPathsPlugin(),
            StyleLintPlugin({
                syntax: 'scss',
                context: this.dirname
            }),
            new FixDefaultImportPlugin()
        ];
    }
};
