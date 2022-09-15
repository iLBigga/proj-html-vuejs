import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
/* add icons to the library */
library.add(faCartShopping)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  render: h => h(App),
}).$mount('#app')
