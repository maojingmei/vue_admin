// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'

import locale from 'element-ui/lib/locale/lang/en'; // lang i18n
import '@/permission'; 
import '../mock';

Vue.use(ElementUI, {size: 'small', zIndex: 3000}, {locale});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});