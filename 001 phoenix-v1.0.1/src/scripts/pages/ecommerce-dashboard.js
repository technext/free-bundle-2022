import { docReady } from 'utils';
import totalSalesChartInit from 'theme/charts/echarts/total-sales-chart';
import newCustomersChartsInit from 'theme/charts/echarts/new-customers';
import topCouponsChartInit from 'theme/charts/echarts/top-coupons-chart';
import projectActualChartInit from 'theme/charts/echarts/project-vs-actual-chart';
import returningCustomerChartInit from 'theme/charts/echarts/returning-customer-chart';
import leafletTopRegionsInit from 'theme/leaflet-top-regions';
import payingCustomerChartInit from 'theme/charts/chartjs/PayingCustomerChart';

docReady(totalSalesChartInit);
docReady(newCustomersChartsInit);
docReady(topCouponsChartInit);
docReady(projectActualChartInit);
docReady(returningCustomerChartInit);
docReady(leafletTopRegionsInit);
docReady(payingCustomerChartInit);
