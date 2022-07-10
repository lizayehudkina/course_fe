const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const minCss = require('gulp-clean-css');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

function html() {
    return gulp.src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(gulp.dest('dist'))
}

exports.html = html;

gulp.task('sass-compile', function () {
    return gulp.src('./src/style/scss/**/*.scss')
        .pipe(sourcemaps.init())
        
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/style/css/'))
});

gulp.task('minify-css', function () {
    return gulp.src('./src/style/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(minCss())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/style/css/'))
});

gulp.task('watch', function () {
    gulp.watch('./src/style/scss/*.scss', gulp.series('sass-compile'))
    gulp.watch('./src/**/*.html', gulp.series('html'))
});

exports.default = () => {
    gulp.src('./src/style/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/style/css/'))
}
