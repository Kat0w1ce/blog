import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../components/Blogs.vue'
import info from '../components/info.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: "/info",
        // children: [{
        //     path: "/blogs",
        //     component: Blogs
        // }]
    }, {
        path: "/blogs",
        component: Blogs
    }, {
        path: "/info",
        component: info
    }
]
const router = new VueRouter({
    routes
})

export default router
