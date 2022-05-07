import { createApp } from 'vue'
import App from './App.vue'
import PDF from 'vue3-pdfmake'

createApp(App).use(PDF).mount('#app')
