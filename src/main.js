import { createApp } from 'vue'
import App from './App.vue'
import mainStore from './stores/main'

const app = createApp(App)
app.use(mainStore)
app.mount('#app')
