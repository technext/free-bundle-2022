/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */
export const docReady = fn => {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

export const resize = fn => window.addEventListener('resize', fn);

export const isIterableArray = array => Array.isArray(array) && !!array.length;

export const camelize = str => {
  const text = str.replace(/[-_\s.]+(.)?/g, (_, c) =>
    c ? c.toUpperCase() : ''
  );
  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;
};

export const getData = (el, data) => {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};

/* ----------------------------- Colors function ---------------------------- */

export const hexToRgb = hexValue => {
  let hex;
  hexValue.indexOf('#') === 0
    ? (hex = hexValue.substring(1))
    : (hex = hexValue);
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null;
};

export const rgbaColor = (color = '#fff', alpha = 0.5) =>
  `rgba(${hexToRgb(color)}, ${alpha})`;

/* --------------------------------- Colors --------------------------------- */

export const getColor = (name, dom = document.documentElement) =>
  getComputedStyle(dom).getPropertyValue(`--phoenix-${name}`).trim();

export const hasClass = (el, className) => {
  !el && false;
  return el.classList.value.includes(className);
};

export const addClass = (el, className) => {
  el.classList.add(className);
};

export const getOffset = el => {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

export const isScrolledIntoView = el => {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  const width = el.offsetWidth;
  const height = el.offsetHeight;

  while (el.offsetParent) {
    // eslint-disable-next-line no-param-reassign
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return {
    all:
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      top + height <= window.pageYOffset + window.innerHeight &&
      left + width <= window.pageXOffset + window.innerWidth,
    partial:
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
  };
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};

export const getBreakpoint = el => {
  const classes = el && el.classList.value;
  let breakpoint;
  if (classes) {
    breakpoint =
      breakpoints[
        classes
          .split(' ')
          .filter(cls => cls.includes('navbar-expand-'))
          .pop()
          .split('-')
          .pop()
      ];
  }
  return breakpoint;
};

/* --------------------------------- Cookie --------------------------------- */

export const setCookie = (name, value, expire) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
};

export const getCookie = name => {
  var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : keyValue;
};

export const settings = {
  tinymce: {
    theme: 'oxide'
  },
  chart: {
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};

/* -------------------------- Chart Initialization -------------------------- */

export const newChart = (chart, config) => {
  const ctx = chart.getContext('2d');
  return new window.Chart(ctx, config);
};

/* ---------------------------------- Store --------------------------------- */

export const getItemFromStore = (key, defaultValue, store = localStorage) => {
  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, payload);
export const getStoreSpace = (store = localStorage) =>
  parseFloat(
    (
      escape(encodeURIComponent(JSON.stringify(store))).length /
      (1024 * 1024)
    ).toFixed(2)
  );

/* get Dates between */

export const getDates = (
  startDate,
  endDate,
  interval = 1000 * 60 * 60 * 24
) => {
  const duration = endDate - startDate;
  const steps = duration / interval;
  return Array.from(
    { length: steps + 1 },
    (v, i) => new Date(startDate.valueOf() + interval * i)
  );
};

export const getPastDates = duration => {
  let days;

  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;

    default:
      days = duration;
  }

  const date = new Date();
  const endDate = date;
  const startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};

/* Get Random Number */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default {
  docReady,
  resize,
  isIterableArray,
  camelize,
  getData,
  hasClass,
  addClass,
  hexToRgb,
  rgbaColor,
  getColor,
  // getGrays,
  getOffset,
  isScrolledIntoView,
  getBreakpoint,
  setCookie,
  getCookie,
  newChart,
  settings,
  getItemFromStore,
  setItemToStore,
  getStoreSpace,
  getDates,
  getPastDates,
  getRandomNumber
};
