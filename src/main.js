import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import '@/assets/css/bootstrap.scss'
import '@popperjs/core'
import '@/assets/css/bootstrap.css'
import '@/assets/js/bootstrap.bundle.js'
import './style.css'
import axios from 'axios'

const app = createApp(App)

app.use(router)
axios.defaults.baseURL = 'http://127.0.0.1:4396'
app.config.globalProperties.$http = axios

app.mount('#app')
