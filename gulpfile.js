'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browsersync = require('browser-sync').create();

const options = {
  autoprefixer: { browsers: ['last 3 versions'] },
  babel: { presets: ['latest'] },
  browsersync: { server: 'dist' },
  cssnano: {},
  fonts: {
    dest: 'dist/fonts',
    src: [
      'src/fonts/*'
    ]
  },
  img: {
    dest: 'dist/img',
    src: [
      'src/img/*'
    ]
  },
  js: {
    dest: 'dist/js',
    src: [
      'src/js/*.js'
    ]
  },
  pug: {
    dest: 'dist',
    pretty: true,
    src: [
      'src/pug/*.pug'
    ]
  },
  scss: {
    dest: 'dist/css',
    outputStyle: 'compressed',
    src: [
      'src/scss/*.scss'
    ]
  }
};

gulp.task('browsersync', function() {
  browsersync.init(['dist/*.html'], options.browsersync);
});

gulp.task('fonts', function() {
  return gulp.src(options.fonts.src)
    .pipe(gulp.dest(options.fonts.dest));
});

gulp.task('img', function() {
  return gulp.src(options.img.src)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(options.img.dest));
});

gulp.task('js', function() {
  return gulp.src(options.js.src)
    .pipe(plugins.babel(options.babel))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(options.js.dest));
});

gulp.task('pug', function() {
  return gulp.src(options.pug.src)
    .pipe(plugins.pug(options.pug))
    .pipe(gulp.dest(options.pug.dest));
});

gulp.task('scss', function() {
  return gulp.src(options.scss.src)
    .pipe(plugins.sass(options.scss))
    .pipe(plugins.autoprefixer(options.autoprefixer))
    .pipe(plugins.cssnano(options.cssnano))
    .pipe(gulp.dest(options.scss.dest))
    .pipe(browsersync.stream());
});

gulp.task('watch', function() {
  gulp.watch('src/img/*', ['img']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/pug/*.pug', ['pug']);
  gulp.watch('src/scss/**/*.scss', ['scss']);
});

gulp.task('dist', ['fonts', 'img', 'js', 'pug', 'scss']);
gulp.task('default', ['browsersync', 'dist', 'watch']);
