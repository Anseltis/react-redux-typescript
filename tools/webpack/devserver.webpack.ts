import * as Webpack from 'webpack';

import { CommonConfigFactory, CommonOptions } from './common.webpack';

export type DevServerConfiguration = any;
export function devServerConfiguration(dirname: string, devServerOptions: DevServerOptions): DevServerConfiguration {
    return {
        publicPath: '/',
        contentBase: dirname,
        hot: true,
        historyApiFallback: true,
        inline: true,
        compress: true,
        port: devServerOptions.port
    };
};

export class DevServerOptions {
    port: number;
}

export class DevServerConfigFactory extends CommonConfigFactory {
    protected devServerOptions: DevServerOptions;

    constructor(dirname: string, options: CommonOptions, devServerOptions: DevServerOptions) {
        super(dirname, options);
        this.devServerOptions = devServerOptions;
    }

    createConfig(): Webpack.Configuration {
        const origin: Webpack.Configuration = super.createConfig();
        return {
            ...origin,
            devServer: this.devServer()
        };
    }

    protected devServer(): DevServerConfiguration {
        return devServerConfiguration(this.dirname, this.devServerOptions);
    }

    protected plugins(): Webpack.Plugin[] {
        const origin: Webpack.Plugin[] = super.plugins();
        return [
            ...origin,
            new Webpack.HotModuleReplacementPlugin()
        ];
    }

    protected entry(): string[] {
        const origin: string[] = super.entry();
        const port: number = this.devServerOptions.port;
        return [
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            ...origin
        ];
    }

}