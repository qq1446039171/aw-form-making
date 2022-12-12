import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import JsonViewer from 'vue-json-viewer'
import ElementUI from 'element-ui'
import AwUi from 'aw-ui-vue'
import AwCopy from 'aw-copy'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.scss'
Vue.config.productionTip = false
Vue.use(JsonViewer)
Vue.use(AwUi)
Vue.use(AwCopy)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
