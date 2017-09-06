// SASS Compiling only Gulp file

// Required
var gulp	=	require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass');
	// uncss = require('gulp-uncss');

var destination = "../plakkr/plakkr-frontend/assets/css";

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false, browsers: ['last 2 versions', 'Firefox > 20', 'Firefox ESR', 'ie 6-11', 'iOS 7'] }))
    .pipe(gulp.dest(destination));
});

// Watch
gulp.task('watch',function(){
	gulp.watch('./scss/**/*.scss', ['sass']);
});


// Default

gulp.task('default',['sass','watch']);