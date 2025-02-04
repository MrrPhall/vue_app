import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'  // Correct path

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
