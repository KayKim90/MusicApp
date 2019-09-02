import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

sync(store, router)

Vue.component('Panel', Panel)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
