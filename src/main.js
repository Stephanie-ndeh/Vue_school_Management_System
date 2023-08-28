import { createApp } from 'vue';
import { createRouter , createWebHistory} from 'vue-router';
import App from './App.vue';
import HomeMenu from './components/HomeMenu.vue'
import Container_Box from './components/Container_Box.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/Home', 
        Component: HomeMenu,
    },
    {
        path:'/container',
        Component: Container_Box
    }]
});
const app = createApp(App);
app.use(router)
app.mount('#app')
