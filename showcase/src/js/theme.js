import { docReady } from './utils';
import navbarInit from './navbar';
import detectorInit from './detector';
import isotopeFilter from './isotope';
import backToTop from './back-to-top';
/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(isotopeFilter);
docReady(backToTop);
