import { docReady } from './utils';
import navbarInit from './bootstrap-navbar';
import detectorInit from './detector';
import scrollToTop from './scroll-to-top';
import isotopeFilter from './isotope';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);
docReady(isotopeFilter);
