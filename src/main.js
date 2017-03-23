// require('babel-polyfill');
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 使用element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element);

import axios from 'axios'
Vue.prototype.$http = axios;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})