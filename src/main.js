import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import AsyncComputed from 'vue-async-computed';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

Vue.component('apexchart', VueApexCharts);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
