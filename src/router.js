
import { createWebHashHistory,createRouter } from 'vue-router'
import HomeMenu from './components/HomeMenu.vue'
import Container_Box from './components/Container_Box'
import AboutUs from './components/AboutUs'

const routes = [
        {path: '/', component: HomeMenu},
        {path: '/container', component: Container_Box},
        {path: '/about', component: AboutUs}
];
 const router = createRouter({
    history:createWebHashHistory,
    routes
})
export default router;

// export default new Router({
//     routes: [
//         {path: '/', component: HomeMenu},
//         {path: '/container', component: Container_Box},
//         {path: '/about', component: AboutUs}
//     ]
// })