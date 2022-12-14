import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './main.css'

import './assets/main.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);


app.mount('#app')