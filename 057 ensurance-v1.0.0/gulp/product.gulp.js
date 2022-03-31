const gulp = require("gulp");
const zip = require("gulp-zip");
const { product } = require("./gulp.json");
const { name, version } = require("./utils.js");

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|   Make Product
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task("product", () =>
  gulp
    .src(product.paths, {
      base: "./",
    })
    .pipe(zip(`${name}-${version}.zip`))
    .pipe(gulp.dest("./"))
);
