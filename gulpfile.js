const gulp = require('gulp');
const browserSync = require('browser-sync');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const image = require('gulp-image');
const nib = require('nib');
const jeet = require('jeet');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('browser-sync', function(done) {
	browserSync.init({
		port: 4444,
		server: {
			directory: true,
			baseDir: './dist'
		},
		open: false
	}, done);
});

gulp.task('sass', function() {
	return gulp.src('./src/stylesheets/styles.scss')
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message%>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('pug', function() {
	return gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message%>")
		}))
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('image', function () {
  gulp.src('./src/images/*')
		.pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('fonts', function() {
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('./dist/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	watch('./src/stylesheets/**/*.scss', gulp.series('sass'));
	watch('./src/pug/**/*.pug', gulp.series('pug'), function(done) {
		browserSync.reload();
		done();
	});
});


gulp.task('default', gulp.series(['browser-sync', 'sass', 'pug', 'watch']));
