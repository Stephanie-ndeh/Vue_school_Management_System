import { createApp } from 'vue';
// import { createRouter , createWebHistory} from 'vue-router';
import router from './router';
import App from './App.vue';



createApp(App).use(router).mount('#app')

// const router = new createRouter({
//     history: createWebHistory(),
//     routes: [{
//         path: '/Home', 
//         Component: HomeMenu,
//     },
// ]
// });
// const app = createApp(App);
// app.use(router)
// app.mount('#app')
