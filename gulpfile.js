// 外部ファイル読み込み
const config = require('./config');

// gulpプラグインの読み込み
const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');

// コンパイルするプラグインの読み込み
// Sass
const sass = require('gulp-sass');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
const mediaqueries = require('gulp-group-css-media-queries');

// JSON
const fs = require('fs');

// ejs
const htmlhint = require('gulp-htmlhint');
const ejs = require('gulp-ejs');

// JavaScript
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
// const babelify = require('babelify');

// 画像
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

// ファイル名変更
// const rename = require('gulp-rename');

// エラー出力
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// タスクを順次実行
gulp.task('default', function (callback) {
    return runSequence(['copy', 'html', 'css', 'image', 'js'], callback);
});

// 複製タスクを実行
gulp.task('copy', function (callback) {
    return runSequence(['vendor', 'pdf'], callback);
});

// .pdfの複製
gulp.task('pdf', function () {
    return (
        gulp.src(['src/assets/pdf/*.pdf']))
        // フォルダ以下に保存
        .pipe(gulp.dest('dest/assets/pdf/')
    );
});

// vendorの複製
gulp.task('vendor', function () {
    return (
        gulp.src(['src/assets/vendor/**/', '!src/assets/vendor/_archives/', '!src/assets/vendor/_archives/**/']))
        // フォルダ以下に保存
        .pipe(gulp.dest('dest/assets/vendor/')
    );
});

// dest配下のファイルを削除
gulp.task('clean', function () {
    return del(['dest/**', '!dest', '!dest/.vscode']);
});

// CSSタスクを作成する
gulp.task('css', function () {
    // ファイルを取得
    return (
        gulp.src(['src/assets/sass/**/*.scss', '!src/assets/sass/**/_*.scss'])
            // コンパイルを実行
            .pipe(plumber({
                errorHandler: notify.onError('<%= error.message %>')
            }))
            .pipe(sass())
            .pipe(csscomb())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(mediaqueries())
            .on('error', function (e) {
                console.log(e);
            })
            // フォルダ以下に保存
            .pipe(gulp.dest('dest/assets/css/'))
    );
});

// HTMLタスクを生成する
gulp.task('html', function () {
    var data = JSON.parse(fs.readFileSync('src/html/json/_common/_view_at.json'));
    // ファイルを取得
    return (gulp.src(['src/html/**/*.ejs', '!src/**/_*.ejs']))
        // コンパイルを実行
        .pipe(plumber(
            { errorHandler: notify.onError('<%= error.message %>') }
        ))
        .pipe(ejs(data))
        .pipe(ejs(
            {},
            { rmWhitespace: true },
            { ext: '.html' }
        ))
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
        .on('error', function (e) {
            console.log(e);
        })
        // フォルダ以下に保存
        .pipe(gulp.dest('dest/'))
});

// JavaScriptタスクを生成する
gulp.task('js', function (callback) {
    return runSequence('js-browserify', 'js-uglify', callback);
});

gulp.task('js-browserify', function () {
    // forEachは返り値がundefinedの為、処理したい内容を変数に格納する
    // https://teratail.com/questions/214687
    // https://teratail.com/questions/180992
    let gulpData;

    config.js.concat.forEach(function (item, index, arr) {
        // あらかじめ、返す用の変数に格納しておく
        const gulpInnerData = browserify(
            {
                entries: item.source,
                extensions: ['.js']
            }
        )
            .bundle()
            .on('error', function (e) {
                console.log(e);
            })
            .pipe(source(item.publish))
            .pipe(gulp.dest('dest/assets/js/'))

        // 走査の最後なら、上スコープの変数に格納
        if (index + 1 === arr.length) {
            gulpData = gulpInnerData;
        }
    });

    // 最終的なGulpオブジェクトを返す
    return gulpData;
});

gulp.task('js-uglify', function () {
    // ファイルを取得
    return (
        gulp.src(['./dest/assets/js/**/*.js'])
            // コンパイルを実行
            .pipe(plumber(
                {
                    errorHandler: notify.onError('<%= error.message %>')
                }
            ))
            .pipe(babel({
                presets: ['@babel/preset-env']
            }))
            .pipe(uglify())
            .on('error', function (e) {
                console.log(e);
            })
            // フォルダ以下に保存
            .pipe(gulp.dest('dest/assets/js/'))
    );
});

// 画像タスクを生成する
gulp.task('image', function () {
    gulp.src('src/assets/img/**/*.+(jpg|jpeg|png|svg|ico|gif)')
        // コンパイルを実行
        .pipe(changed('dest/assets/img/'))
        .pipe(imagemin(
            [
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 6 })
                // imagemin.svgo({
                //     plugins: [
                //         {removeViewBox: true},
                //         {cleanupIDs: false}
                //     ]
                // })
            ]
        ))
        // フォルダ以下に保存
        .pipe(gulp.dest('dest/assets/img/'));
});
