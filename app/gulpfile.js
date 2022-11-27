const theme = "sol-mare";

const {
    src,
    dest,
    watch,
    series,
    parallel,
    lastRun,
    tree
} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob-use-forward')
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
const gcmq = require('gulp-group-css-media-queries');
const mode = require('gulp-mode')();
const browserSync = require('browser-sync');
const crypto = require('crypto');
const replace = require('gulp-replace');
const tinypng = require("gulp-tinypng-extended");
const webp = require("gulp-webp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const del = require("del");

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const bundleJs = (done) => {
  webpackStream(webpackConfig, webpack)
    .on('error', function (e) {
      console.error(e);
      this.emit('end');
  })
    .pipe(dest("public/wp-content/themes/"+ theme +"/assets/js"))
  done();
};

const compileSass = done => {
    const postcssPlugins = [
        autoprefixer({
            grid: "autoplace",
            cascade: false,
        }),
        cssdeclsort({
            order: 'alphabetical'
        })
    ];
    src('./src/scss/**/*.scss', {
            sourcemaps: true
    })
    .pipe(sassGlob())
    .pipe(
        plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })
    )
    .pipe(sass({
        outputStyle: 'expanded',
    }))
    .pipe(postcss(postcssPlugins))
    .pipe(mode.production(gcmq()))
    .pipe(dest("./public/wp-content/themes/"+ theme +"/assets/css", {
        sourcemaps: './sourcemaps'
    }));
    done();
};

const buildServer = (done) => {
    browserSync.init({
        port: 8080,
        files: ["**/*"],
        proxy: theme +".local",
        open: true,
        watchOptions: {
            debounceDelay: 1000,
        }
    });
    done();
};

const browserReload = done => {
    browserSync.reload();
    done();
};

const tinyPng = done => {
    src("./src/img/**/*.{png,jpg,jpeg}")
        .pipe(plumber())
        .pipe(tinypng({
            key: "H3rNFhbHPWnPl3dP2v0r7S0kZcHRR2rP",
            sigFile: "./src/img/.tinypng-sigs",
            log: true,
            summarise: true,
            sameDest: true,
            parallel: 10,
        }))
        .pipe(dest("./src/img"))
        .on("end", done);
};

const copyImages = done => {
    src(["./src/img/**/*"])
    .pipe(dest("./public/wp-content/themes/"+ theme +"/assets/img"))
    .on("end", done);
};

const generateWebp = done => {
    src("./public/wp-content/themes/"+ theme +"/assets/img/**/*.{png,jpg,jpeg}", {since: lastRun(generateWebp)})
        .pipe(webp())
        .pipe(dest("public/wp-content/themes/"+ theme +"/assets/img"));
    done();
};

const watchFiles = () => {
    watch('./src/scss/**/*.scss', series(compileSass, browserReload))
    watch(["public/wp-content/themes/"+ theme +"/**/*.php"], series(browserReload))
    watch('./src/js/**/*.js', series(bundleJs, browserReload))
    watch( './src/img/**/*', series(generateWebp, copyImages))
};

const clean = (done) => {
    del(["public/wp-content/themes/"+ theme +"/assets/img/**/*"]);
    done();
};

module.exports = {
    sass: compileSass,
    bundle: bundleJs,
    build: series(clean, copyImages, tinyPng, generateWebp,parallel(compileSass, bundleJs)),
    tinypng: tinyPng,
    webp: generateWebp,
    image: series(tinyPng, generateWebp, copyImages),
    default: parallel(buildServer, watchFiles),
};
