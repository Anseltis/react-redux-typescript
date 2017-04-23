import * as gulp from 'gulp';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import * as config from './web/webpack.config';

import * as gutil from 'gulp-util';

gulp.task('copy', () => {
    return gulp.src([__dirname + '/web/index.html'])
        .pipe(gulp.dest(__dirname + '/dist/web'));
});

gulp.task('webpack', (callback) => {
    webpack(config.default, (err, stats) => {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        callback();
    });
});

gulp.task('webpack-dev-server', (callback) => {
    var compiler: webpack.Compiler = webpack(config.default);
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, 'localhost', (err) => {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        callback();
    });
});

gulp.task('build', ['copy', 'webpack']);