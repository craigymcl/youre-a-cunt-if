const gulp = require('gulp');
const browserSync = require('browser-sync');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const newer = require('gulp-newer');
const image = require('gulp-image');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('browser-sync', function(done) {
	browserSync.init({
		port: 4444,
		server: {
			directory: true,
			baseDir: './docs'
		},
		open: false
	}, done);
});

gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./docs/js'));
});

gulp.task('sass', function() {
	return gulp.src('./src/stylesheets/styles.scss')
		// .pipe(newer('./docs/css'))
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message%>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./docs/css'))
		.pipe(browserSync.stream());
});



gulp.task('pug', function() {
	return gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
		.pipe(newer('./docs'))
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message%>")
		}))
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./docs'))
});

gulp.task('image', function () {
  return gulp.src('./src/images/**/*')
		.pipe(newer('./docs/images'))
		.pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: false,
      jpegRecompress: true,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 1
    }))
    .pipe(gulp.dest('./docs/images'));
});

gulp.task('fonts', function() {
	return gulp.src('./src/fonts/**/*')
		.pipe(newer('./docs/fonts'))
		.pipe(gulp.dest('./docs/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	watch('./src/stylesheets/**/*.scss', gulp.series('sass'))
	watch('./src/images/**/*', gulp.series('image'))
	watch('./src/js/**/*.js', gulp.series('js'))
	watch('./src/pug/**/*.pug', gulp.series('pug'), function(done) {
		browserSync.reload();
		done();
	});
});


gulp.task('default', gulp.series(['browser-sync', 'sass', 'js', 'pug', 'fonts', 'image', 'watch']));
