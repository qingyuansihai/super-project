// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*引入 mint UI*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(ElementUI);//注入插件
Vue.use(MintUI);//注入插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
