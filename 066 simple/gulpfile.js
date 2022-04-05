const gulp = require('gulp');
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano    = require("cssnano");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
var merge = require('merge-stream');
var sourcemaps = require("gulp-sourcemaps");

function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "./"
      },
      port: 3000
    });
    done();
  }

function css() {
    return gulp
      .src("scss/style.scss")
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "expanded"}))
      .pipe(gulp.dest("css/"))
      .pipe(rename({ suffix: ".min" }))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("css/"))
      .pipe(browsersync.stream());
  }


  function watchFiles() {
    gulp.watch("scss/*.scss", css);
    gulp.browserSyncReload;
  }

  const watch = gulp.parallel(watchFiles, browserSync);


  exports.css = css;
  exports.watch = watch;
  exports.serve = browserSync;


/*Scripts for addons*/
gulp.task('copyAddonsScripts', function() {
  var aScript1 = gulp.src(['node_modules/jquery/dist/jquery.min.js'])
      .pipe(gulp.dest('vendors/jquery'));
  var aScript2 = gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
      .pipe(gulp.dest('vendors/bootstrap'));
  var aScript3 = gulp.src(['node_modules/popper.js/dist/popper.min.js'])
      .pipe(gulp.dest('vendors/popper'));
  var aScript4 = gulp.src(['node_modules/owl.carousel/dist/owl.carousel.min.js'])
      .pipe(gulp.dest('vendors/owl-carousel/js'));
  var aScript5 = gulp.src(['node_modules/aos/dist/aos.js'])
      .pipe(gulp.dest('vendors/aos/js'));
  var aScript5 = gulp.src(['node_modules/bootstrap/* '])
      .pipe(gulp.dest('vendors/bootstrap'));
  return merge(aScript1, aScript2, aScript3, aScript4, aScript5);
});


/*Styles for addons*/
gulp.task('copyAddonsStyles', function() {
  var aStyle1 = gulp.src(['node_modules/mdi/css/materialdesignicons.min.css'])
      .pipe(gulp.dest('vendors/mdi/css'));
  var aStyle2 = gulp.src(['node_modules/bootstrap/scss/bootstrap.scss'])
      .pipe(gulp.dest('vendors/bootstrap/scss'));
  var aStyle3 = gulp.src(['node_modules/owl.carousel/dist/assets/owl.carousel.min.css'])
      .pipe(gulp.dest('vendors/owl-carousel/css'));
  var aStyle4 = gulp.src(['node_modules/owl.carousel/dist/assets/owl.theme.default.css'])
      .pipe(gulp.dest('vendors/owl-carousel/css'));
  var aStyle5 = gulp.src(['node_modules/aos/dist/aos.css'])
  .pipe(gulp.dest('vendors/aos/css'));
  return merge(aStyle1, aStyle2, aStyle3, aStyle4, aStyle5);
});
