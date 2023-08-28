import { createApp } from 'vue';
import { createRouter , createWebHistory} from 'vue-router';
import App from './App.vue';
import HomeMenu from '@/components/HomeMenu.vue'


const router = new createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/Home', 
        Component: HomeMenu,
    },
]
});
const app = createApp(App);
app.use(router)
app.mount('#app')
