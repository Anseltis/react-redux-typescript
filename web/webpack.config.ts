import * as Webpack from 'webpack';
import { ConfigFactory, CommonConfigFactory, CommonOptions } from '../tools/webpack/common.webpack';

export const dirname: string = __dirname;
export const options: CommonOptions = {
    outputDirname: '../dist/web',
    outputFilename: 'bundle.js',
    entryFileName: 'index.tsx'
};

const configFactory: ConfigFactory<Webpack.Configuration> = new CommonConfigFactory(dirname, options);
export const config: Webpack.Configuration = configFactory.createConfig();
export default config;
