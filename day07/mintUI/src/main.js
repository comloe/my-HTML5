import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import mintui from 'mint-ui'
axios.defaults.baseURL = 'http://127.0.0.1:3100/'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
import 'mint-ui/lib/style.min.css';
Vue.use(mintui);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
