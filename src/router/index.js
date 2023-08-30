
import { createWebHistory,createRouter } from 'vue-router'
import AboutUs from '../views/AboutUs'
import HomeMenu from '../views/HomeMenu'
import User_Login from '../views/User_Login'
import StudentRegister from '../views/StudentRegister'
import VisaPayment_Method from '../views/VisaPayment_Method'
import Mobile_payment from '../views/Mobile_payment'
import Payment_Method from '../views/Payment_Method'

const routes = [
        {path: '/about',name: 'AboutUs', component: AboutUs},
        {path: '/Visa',name: 'VisaPayment_Method', component: VisaPayment_Method},
        {path: '/mobile',name: 'Mobile_payment', component: Mobile_payment},
        {path: '/method', name: 'Payment_Method', component: Payment_Method},
        {path: '/home',name: 'HomeMenu', component: HomeMenu},
        {path: '/login',name: 'User_Login', component: User_Login},
        {path: '/register',name: 'StudentRegister', component: StudentRegister}
];
 const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
