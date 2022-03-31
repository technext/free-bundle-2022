import merge from 'lodash.merge';
import * as echarts from 'echarts';
import dayjs from 'dayjs';

export const echartSetOption = (chart, userOptions, getDefaultOptions) => {
  chart.setOption(merge(getDefaultOptions(), userOptions));
};

export const resizeEcharts = () => {
  const $echarts = document.querySelectorAll('[data-echart-responsive]');

  if ($echarts.length > 0) {
    $echarts.forEach(item => {
      const echartInstance = echarts.getInstanceByDom(item);
      echartInstance?.resize();
    });
  }
};

export const tooltipFormatter = (params, dateFormatter = 'MMM DD') => {
  let tooltipItem = ``;
  params.forEach(el => {
    tooltipItem += `<div class='ms-1'>
        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${
          el.borderColor ? el.borderColor : el.color
        }"></span>
          ${el.seriesName} : ${
      typeof el.value === 'object' ? el.value[1] : el.value
    }
        </h6>
      </div>`;
  });
  return `<div>
            <p class='mb-2 text-600'>
              ${
                dayjs(params[0].axisValue).isValid()
                  ? dayjs(params[0].axisValue).format(dateFormatter)
                  : params[0].axisValue
              }
            </p>
            ${tooltipItem}
          </div>`;
};
