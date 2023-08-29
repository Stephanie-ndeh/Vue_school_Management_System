
import { createWebHistory,createRouter } from 'vue-router'
import AboutUs from '../views/AboutUs'
import HomeMenu from '../views/HomeMenu'
import User_Login from '../views/User_Login'
import StudentRegister from '../views/StudentRegister'

const routes = [
        {path: '/about',name: 'AboutUs', component: AboutUs},
        {path: '/home',name: 'HomeMenu', component: HomeMenu},
        {path: '/login',name: 'User_Login', component: User_Login},
        {path: '/register',name: 'StudentRegister', component: StudentRegister}
];
 const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
