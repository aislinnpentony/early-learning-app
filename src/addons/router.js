import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Math from '../views/Math.vue'
import English from '../views/English.vue'
import Science from '../views/Science.vue'



const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/login', name: 'login', component: Login }, 
    { path: '/Signup', name: 'signup', component: Signup},
    { path: '/Math', name: 'math', component: Math},  
    { path: '/English', name: 'english', component: English},
    { path: '/Science', name: 'science', component: Science}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router