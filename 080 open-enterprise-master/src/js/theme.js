import { docReady } from './utils';
import detectorInit from './detector';
import swiperInit from './swiper';
import navbarDarkenOnScroll from './navbar-darken-on-scroll'

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(detectorInit);
docReady(swiperInit);
docReady(navbarDarkenOnScroll);

