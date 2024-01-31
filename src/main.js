import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App).use(store).use(router).use(bootstrap).use(bootstrapVue).mount('#app')
