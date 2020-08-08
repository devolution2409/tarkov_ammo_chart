import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import AsyncComputed from 'vue-async-computed';

import VueMaterial from 'vue-material';

import App from './App.vue';
import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default.css';
import 'vue-material/dist/theme/default-dark.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

Vue.component('apexchart', VueApexCharts);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
