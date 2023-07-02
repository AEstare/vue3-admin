import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import '@/assets/css/bootstrap.scss'
import '@popperjs/core'
import '@/assets/css/bootstrap.css'
import '@/assets/js/bootstrap.bundle.js'
import './style.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
