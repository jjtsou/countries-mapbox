import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/index.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
