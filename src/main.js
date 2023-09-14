import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'

import Search from './components/Search.vue';
import Results from './components/Results.vue';
import User from './components/User.vue';

import store from './stores/main'

const app = createApp(App);

app.use(store);

app.component('Search', Search);
app.component('Results', Results);
app.component('User', User);

app.mount('#app');
