import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/styles.css'
import './assets/css/custom.css'
// import './assets/css/neumorphism.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './assets/js/scripts.js'
import VueWechatTitle from 'vue-wechat-title'

// import 'aos/dist/aos.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueWechatTitle)

router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})