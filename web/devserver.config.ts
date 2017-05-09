import * as Webpack from 'webpack';
import { ConfigFactory, CommonOptions } from '../tools/webpack/common.webpack';
import { DevServerConfigFactory,  DevServerOptions } from '../tools/webpack/devserver.webpack';
import { options, dirname } from './webpack.config';

export const devServerOptions: DevServerOptions = {
    port: 8000
};

const configFactory: ConfigFactory<Webpack.Configuration> = new DevServerConfigFactory(dirname, options, devServerOptions);
export const config: Webpack.Configuration = configFactory.createConfig();
export default config;
