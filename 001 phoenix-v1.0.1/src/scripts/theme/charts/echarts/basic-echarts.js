import dayjs from 'dayjs';
import * as echarts from 'echarts';
import { getColor, getData, getDates, resize } from '../../../utils';
import { echartSetOption } from './echarts-utils';
/* -------------------------------------------------------------------------- */
/*                     Echart Bar Member info                                 */
/* -------------------------------------------------------------------------- */

const basicEchartsInit = () => {
  const $echartBasicCharts = document.querySelectorAll('[data-echarts]');
  $echartBasicCharts.forEach($echartBasicChart => {
    const userOptions = getData($echartBasicChart, 'echarts');
    const chart = echarts.init($echartBasicChart);
    const getDefaultOptions = () => ({
      color: getColor('primary'),
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getColor('100'),
        borderColor: getColor('300'),
        textStyle: { color: getColor('dark') },
        borderWidth: 1,
        transitionDuration: 0
      },
      xAxis: {
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
          interval: 6,
          showMinLabel: true,
          showMaxLabel: true,
          color: getColor('800')
        }
      },
      yAxis: {
        show: false,
        type: 'value',
        boundaryGap: false
      },
      series: [
        {
          type: 'bar',
          symbol: 'none'
        }
      ],
      grid: { left: 22, right: 22, top: 0, bottom: 20 }
    });
    echartSetOption(chart, userOptions, getDefaultOptions);

    resize(() => {
      chart.resize();
    });
  });
};

export default basicEchartsInit;
