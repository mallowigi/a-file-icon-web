const gulp = require('gulp');
const rename = require('gulp-rename');
const copy = require('gulp-copy');
const zip = require('gulp-zip');
const iconFont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');

gulp.task('icons', () => {
  return gulp.src('iconGenerator/assets/icons/files/*.svg')
    .pipe(copy('public', { prefix: 2 }))
    .pipe(iconFont({
      fontName: 'icons',
      formats: ['eot', 'woff', 'ttf'],
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true,
      appendCodepoints: true,
      prependUnicode: false,
    }))
    .on('glyphs', function (glyphs, options) {
      gulp.src('assets/iconfont.ejs', {})
        .pipe(consolidate('underscore', { glyphs: glyphs }))
        .pipe(rename('index.ts'))
        .pipe(gulp.dest('public/icons/files'));
    });
});

gulp.task('folders', () => {
  return gulp.src('iconGenerator/assets/icons/folders/*.svg')
    .pipe(copy('public', { prefix: 2 }))
    .pipe(iconFont({
      fontName: 'folders',
      formats: ['eot', 'woff', 'ttf'],
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true,
      appendCodepoints: true,
      prependUnicode: false,
    }))
    .on('glyphs', function (glyphs, options) {
      gulp.src('assets/folderIconfont.ejs', {})
        .pipe(consolidate('underscore', { glyphs: glyphs }))
        .pipe(rename('index.ts'))
        .pipe(gulp.dest('public/icons/folders'));
    });
});

gulp.task('assets', () => {
  return gulp.src([
    'iconGenerator/icon_associations.json',
    'iconGenerator/folder_associations.json',
    'assets/global.css',
  ])
    .pipe(copy('public', { prefix: 1 }));
});

gulp.task('prepare', gulp.series('icons', 'folders', 'assets'));

gulp.task('copy', () => {
  return gulp.src(['*.*', '!release.zip', 'dist/*.css', 'public/**/*'], { allowEmpty: true })
    .pipe(copy('release'));
});

gulp.task('zip', () => {
  return gulp.src('release/**/*')
    .pipe(zip('release.zip'))
    .pipe(gulp.dest('.'));
});

gulp.task('release', gulp.series('prepare', 'copy', 'zip'));
