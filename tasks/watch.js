'use strict';

const gulp = require('gulp');

gulp.task('watch', () => {

  gulp.watch('./src/**.ts', gulp.series('transpile:dist'));

  gulp.watch('./src/**.html', gulp.series('copy:dist:template', 'server:reload'));

});
