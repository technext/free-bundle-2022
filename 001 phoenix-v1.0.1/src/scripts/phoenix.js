/* eslint-disable import/no-extraneous-dependencies */

import '@fortawesome/fontawesome-free/js/all';
import Prism from 'prismjs';
import { docReady } from './utils';
import toastInit from './theme/toast';
import tooltipInit from './theme/tooltip';
import handleNavbarVerticalCollapsed from './theme/navbar-vertical';
import featherIconsInit from './theme/featherIcons';
import basicEchartsInit from './theme/charts/echarts/basic-echarts';
import listInit from './theme/list';
import anchorJSInit from './theme/anchor';
import popoverInit from './theme/popover';
import fromValidationInit from './theme/form-validation';
import docComponentInit from './docs';

docReady(toastInit);
docReady(tooltipInit);
docReady(handleNavbarVerticalCollapsed);
docReady(featherIconsInit);
docReady(basicEchartsInit);
docReady(listInit);
docReady(anchorJSInit);
docReady(popoverInit);
docReady(fromValidationInit);
docReady(docComponentInit);

docReady(() => {
  Prism.highlightAll();
});
