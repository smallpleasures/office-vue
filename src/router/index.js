import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login"
import Home from "@/views/Home";
import {initMenu} from '@/utils/menus'
import {getRequest} from "@/utils/api";
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        //hidden: true
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

const router = new VueRouter({
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (window.sessionStorage.getItem('tokenStr')) {
        initMenu(router, store)
        console.log(router)
        // 如果用户不存在
        if (!window.sessionStorage.getItem('user')) {
            // 判断用户信息是否存在
            return getRequest('/admin/info').then(resp => {
                if (resp.object) {
                    // 存入用户信息，转字符串，存入 sessionStorage
                    window.sessionStorage.setItem('user', JSON.stringify(resp.object))
                    // 同步用户信息 编辑用户
                    //store.commit('INIT_ADMIN',resp)
                    next();
                }
            })
        }
        next();
    } else {
        if (to.path === '/') {
            next()
        } else {
            next('/?redirect=' + to.path)
        }
    }
})
export default router