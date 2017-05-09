import * as gulp from 'gulp';
import * as gutil from 'gulp-util';

import * as path from 'path';
import * as Webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import { ConfigFactory, CommonConfigFactory } from './tools/webpack/common.webpack';
import { devServerConfiguration, DevServerConfigFactory, DevServerOptions } from './tools/webpack/devserver.webpack';
import { logOptions } from './tools/webpack/options';
import { options } from './web/webpack.config';
import * as config from './web/webpack.config';
import { devServerOptions } from './web/devserver.config';
import * as devServerConfig from './web/devserver.config';

gulp.task('copy', () => {
    return gulp.src([__dirname + '/web/index.html'])
        .pipe(gulp.dest(__dirname + '/dist/web'));
});


gulp.task('webpack', (callback) => {
    let dirname: string = path.join(__dirname, './web');
    const configFactory: ConfigFactory<Webpack.Configuration> = new CommonConfigFactory(dirname, options);
    const config: Webpack.Configuration = configFactory.createConfig();
    Webpack(config, (err, stats) => {
        var opts: any = logOptions(stats.hasErrors());
        console.log(stats.toString(opts));
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        callback();
    });
});

gulp.task('build', ['copy', 'webpack']);


gulp.task('start', (callback) => {
    let dirname: string = path.join(__dirname, './web');
    const configFactory: ConfigFactory<Webpack.Configuration> = new DevServerConfigFactory(dirname, options, devServerOptions);
    const config: Webpack.Configuration = configFactory.createConfig();
    let compiler: Webpack.Compiler = <Webpack.Compiler>Webpack(config, (err, stats) => {
        var opts: any = logOptions(stats.hasErrors());
        console.log(stats.toString(opts));
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
    });

    new WebpackDevServer(compiler, devServerConfiguration(dirname, devServerOptions))
        .listen(devServerOptions.port, 'localhost', (err, stats) => {
            if (err) {
                throw new gutil.PluginError('webpack-dev-server', err, stats);
            }
            callback();
    });
});
