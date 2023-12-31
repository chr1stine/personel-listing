import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'

import Search from './components/Search.vue'
import Results from './components/Results.vue'
import UserDetail from './components/UserDetail.vue'

import store from './store'

const app = createApp(App)

app.use(store)

app.component('Search', Search)
app.component('Results', Results)
app.component('UserDetail', UserDetail)

app.mount('#app')
