import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
// import { routes } from './routes'
import { store } from './store'

createApp(App).use(store).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
