'use strict';

var runSequence = require('run-sequence');

gulp.task('dev', function(callback){
    runSequence('scripts', ['html', 'watch'], callback)
});

gulp.task('serve', ['dev'], function(){

    browserSync.init(null, {
        proxy: "http://localhost:" + process.env.SERVER_PORT,
        files: [config.paths.development],
        browser: "google chrome",
        port: 7000
    });

    gulp.watch(config.paths.development + 'index.html').on('change', browserSync.reload);

});