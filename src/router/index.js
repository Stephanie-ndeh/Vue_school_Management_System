
import { createWebHistory,createRouter } from 'vue-router'
import AboutUs from '../views/AboutUs'
import HomeMenu from '../views/HomeMenu'
import UserLoginView from '../views/UserLoginView'
import StudentRegister from '../views/StudentRegister'
import VisaPaymentMethod from '../views/VisaPaymentMethod'
import MobilePayMent from '../views/MobilePayMent'
import PaymentMethod from '../views/PaymentMethod'
import ContactUsPage from '../views/ContactUsPage'
import PaymentAmount from '@/views/PaymentAmount.vue'

const routes = [
        {path: '/about',name: 'AboutUs', component: AboutUs},
        {path: '/Visa',name: 'VisaPaymentMethod', component: VisaPaymentMethod},
        {path: '/mobile',name: 'MobilePayMent', component: MobilePayMent},
        {path: '/method', name: 'PaymentMethod', component: PaymentMethod},
        {path: '/contact', name: 'ContactUsPage', component: ContactUsPage},
        {path: '/home',name: 'HomeMenu', component: HomeMenu},
        {path: '/login',name: 'UserLoginView', component: UserLoginView},
        {path: '/register',name: 'StudentRegister', component: StudentRegister},
        {path: '/amount', name: 'PaymentAmount',component: PaymentAmount}
];
 const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
