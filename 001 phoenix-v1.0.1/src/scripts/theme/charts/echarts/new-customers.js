import dayjs from 'dayjs';
import * as echarts from 'echarts';
import { getColor, getData, getDates, resize } from '../../../utils';
import { echartSetOption } from './echarts-utils';
/* -------------------------------------------------------------------------- */
/*                     Echart Bar Member info                                 */
/* -------------------------------------------------------------------------- */

const newCustomersChartsInit = () => {
  const $echartNewCustomersCharts = document.querySelector(
    '.echarts-new-customers'
  );

  if ($echartNewCustomersCharts) {
    const userOptions = getData($echartNewCustomersCharts, 'echarts');
    const chart = echarts.init($echartNewCustomersCharts);
    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getColor('100'),
        borderColor: getColor('300'),
        textStyle: { color: getColor('dark') },
        borderWidth: 1,
        transitionDuration: 0
      },
      xAxis: [
        {
          type: 'category',
          data: getDates(
            new Date('5/1/2022'),
            new Date('5/7/2022'),
            1000 * 60 * 60 * 24
          ),
          show: true,
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: { color: getColor('200') }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: value => dayjs(value).format('DD MMM'),
            showMinLabel: true,
            showMaxLabel: false,
            color: getColor('800'),
            align: 'left',
            interval: 5,
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: 12.8
          }
        },
        {
          type: 'category',
          position: 'bottom',
          show: true,
          data: getDates(
            new Date('5/1/2022'),
            new Date('5/7/2022'),
            1000 * 60 * 60 * 24
          ),
          axisLabel: {
            formatter: value => dayjs(value).format('DD MMM'),
            interval: 130,
            showMaxLabel: true,
            showMinLabel: false,
            color: getColor('800'),
            align: 'right',
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: 12.8
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          boundaryGap: false
        }
      ],
      yAxis: {
        show: false,
        type: 'value',
        boundaryGap: false
      },
      series: [
        {
          type: 'line',
          data: [150, 100, 300, 200, 250, 180, 250],
          showSymbol: false,
          symbol: 'circle',
          lineStyle: {
            width: 2,
            color: getColor('200')
          },
          emphasis: {
            lineStyle: {
              color: getColor('200')
            }
          }
        },
        {
          type: 'line',
          data: [200, 150, 250, 100, 500, 400, 600],
          lineStyle: {
            width: 2,
            color: getColor('primary')
          },
          showSymbol: false,
          symbol: 'circle'
        }
      ],
      grid: { left: 0, right: 0, top: 5, bottom: 20 }
    });
    echartSetOption(chart, userOptions, getDefaultOptions);

    resize(() => {
      chart.resize();
    });
  }
};

export default newCustomersChartsInit;
