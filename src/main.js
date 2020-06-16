import Vue from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')

