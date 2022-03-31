import { getColor } from '../../../utils';
import { chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Scatter                                   */
/* -------------------------------------------------------------------------- */
const payingCustomerChartInit = () => {
  const payingCustomerChartEl = document.getElementById('payingCustomerChart');
  if (payingCustomerChartEl) {
    const getOptions = () => ({
      type: 'doughnut',
      data: {
        labels: ['Falcon', 'Sparrow'],
        datasets: [
          {
            data: [50, 88],
            backgroundColor: [getColor('primary'), getColor('primary-100')],
            borderColor: [getColor('primary'), getColor('primary-100')],
            borderRadius: [
              {
                outerStart: 15,
                outerEnd: 0,
                innerStart: 15,
                innerEnd: 0
              },
              {
                outerStart: 0,
                outerEnd: 15,
                innerStart: 0,
                innerEnd: 15
              }
            ]
          }
        ]
      },
      options: {
        tooltips: {
          backgroundColor: getColor('primary-100'),
          borderColor: getColor('primary-100'),
          borderWidth: 1,
          titleColor: getColor('black'),
          callbacks: {
            labelTextColor() {
              return getColor('black');
            }
          }
        },
        rotation: -90,
        circumference: '180',
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    chartJsInit(payingCustomerChartEl, getOptions);
  }
};

export default payingCustomerChartInit;
