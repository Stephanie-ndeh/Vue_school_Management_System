import Vue from 'vue'
import Router from 'vue-router'
import HomeMenu from './components/HomeMenu.vue'
import Container_Box from './components/Container_Box'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: HomeMenu},
        {path: '/Container', component: Container_Box}
    ]
})