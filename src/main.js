import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Userfront from '@userfront/toolkit/vue'

Userfront.init("6bgxxj9n")

// try {
//     Userfront.init('123abc4d');
//     console.log("Userfront initialization likely successful"); 
// } catch (error) {
//     console.error("Userfront initialization error:", error);
// }
    
const app = createApp(App)

app.use(router)

app.mount('#app')
