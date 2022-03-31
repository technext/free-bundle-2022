const glob = require('glob');
const path = require('path');

const pugBased = true;

const pugOptions = {
  nodir: true,
  ignore: ['./src/pug/mixins/**/*.pug', './src/pug/layouts/**/*.pug']
};
const jsOptions = {
  nodir: true,
  ignore: [
    './src/scripts/phoenix.js',
    './src/scripts/utils.js',
    './src/scripts/test.js'
  ]
};

const publicFilesOptions = {
  nodir: true,
  ignore: ['./public/assets/img/**/*.*']
};

let publicFiles = glob.sync(
  './public/**/*.*',
  pugBased
    ? publicFilesOptions
    : {
        ...publicFilesOptions,
        ignore: [...publicFilesOptions.ignore, './public/**/*.html']
      }
);

let pugFiles = glob
  .sync('./src/pug/**/*.pug', pugOptions)
  .reduce((acc, val) => ({ ...acc, [val]: path.basename(val, '.pug') }), {});

let jsFiles = glob.sync('./src/scripts/pages/*.js', jsOptions).reduce(
  (acc, val) => ({
    ...acc,
    [path.basename(val, '.js')]: ['./src/scripts/phoenix.js', val]
  }),
  {}
);

const chunks = {
  './src/pug/index.pug': 'ecommerce-dashboard'
};

const flatSitemap = siteMap => {
  function flatInnter(pages) {
    let flat = [];
    pages.forEach(page => {
      if (!page.hasOwnProperty('pages')) {
        flat = [...flat, page];
      } else {
        flat = [...flat, ...flatInnter(page.pages)];
      }
    });

    return flat;
  }

  const paths = {};

  const siteMapWithPages = siteMap.filter(item => item.pages);
  const siteMapWithOutPages = siteMap.filter(item => !item.pages);

  const flatSiteMap = flatInnter(
    siteMapWithPages.flatMap(item => item.pages)
  ).filter(item => item.name !== '#!');

  [...siteMapWithOutPages, ...flatSiteMap].forEach(item => {
    paths[item.pathName] = `${item.path}.html`;
  });

  return paths;
};

const getPugFiles = () => {
  const pugFiles = glob
    .sync('./src/pug/**/*.pug', pugOptions)
    .reduce((acc, val) => ({ ...acc, [val]: path.basename(val, '.pug') }), {});

  return { ...pugFiles, ...chunks };
};

const getJsFiles = () => {
  const jsFiles = glob
    .sync('./src/scripts/pages/*.js', jsOptions)
    .reduce((acc, val) => ({ ...acc, [path.basename(val, '.js')]: val }), {});

  return jsFiles;
};

const argv = key => {
  if (process.argv.includes(`--${key}`)) return true;
  const value = process.argv.find(element => element.startsWith(`--${key}=`));
  if (!value) return null;
  return value.replace(`--${key}=`, '');
};

module.exports = {
  pugBased,
  pugFiles,
  jsFiles,
  flatSitemap,
  getPugFiles,
  getJsFiles,
  publicFiles,
  argv
};
