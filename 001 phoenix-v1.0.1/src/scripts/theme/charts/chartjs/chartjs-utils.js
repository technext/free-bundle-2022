/* eslint-disable no-new */
import Chart from 'chart.js/auto';

/* -------------------------------------------------------------------------- */
/*                            ChartJs Initialization                          */
/* -------------------------------------------------------------------------- */

export const chartJsInit = (chartEl, config) => {
  if (!chartEl) return;

  const ctx = chartEl.getContext('2d');
  if (ctx) {
    new Chart(ctx, config());
  }
};
