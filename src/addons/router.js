import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Math from '../views/Math.vue'
import English from '../views/English.vue'
import Science from '../views/Science.vue'
import Welcome from '../views/Welcome.vue'
import MathSheet from '../views/user/P1/MathSheet.vue'
import EnglishSheet from '../views/user/P1/EnglishSheet.vue'
import ScienceSheet from '../views/user/P1/ScienceSheet.vue'
import MathSheet1 from '../views/user/P2/MathSheet1.vue'
import EnglishSheet1 from '../views/user/P2/EnglishSheet1.vue'
import ScienceSheet1 from '../views/user/P2/ScienceSheet1.vue'
import MathSheet2 from '../views/user/P3/MathSheet2.vue'
import EnglishSheet2 from '../views/user/P3/EnglishSheet2.vue'
import ScienceSheet2 from '../views/user/P3/ScienceSheet2.vue'
import MathSheet3 from '../views/user/P4/MathSheet3.vue'
import EnglishSheet3 from '../views/user/P4/EnglishSheet3.vue'
import ScienceSheet3 from '../views/user/P4/ScienceSheet3.vue'
import MathSheet4 from '../views/user/P5/MathSheet4.vue'
import EnglishSheet4 from '../views/user/P5/EnglishSheet4.vue'
import ScienceSheet4 from '../views/user/P5/ScienceSheet4.vue'
import MathSheet5 from '../views/user/P6/MathSheet5.vue'
import EnglishSheet5 from '../views/user/P6/EnglishSheet5.vue'
import ScienceSheet5 from '../views/user/P6/ScienceSheet5.vue'
import MathSheet6 from '../views/user/P7/MathSheet6.vue'
import EnglishSheet6 from '../views/user/P7/EnglishSheet6.vue'
import ScienceSheet6 from '../views/user/P7/ScienceSheet6.vue'
import P1 from '../views/user/P1/P1Home.vue'
import P2 from '../views/user/P2/P2Home.vue'
import P3 from '../views/user/P3/P3Home.vue'
import P4 from '../views/user/P4/P4Home.vue'
import P5 from '../views/user/P5/P5Home.vue'
import P6 from '../views/user/P6/P6Home.vue'
import P7 from '../views/user/P7/P7Home.vue'


const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/login', name: 'login', component: Login }, 
    { path: '/Signup', name: 'signup', component: Signup},
    { path: '/ForgotPassword', name: 'forgotPassword', component: ForgotPassword},
    { path: '/Math', name: 'math', component: Math},  
    { path: '/English', name: 'english', component: English},
    { path: '/Science', name: 'science', component: Science},
    { path: '/Welcome', name: 'welcome', component: Welcome},
    { path: '/user/P1/MathSheet', name: 'mathSheet', component: MathSheet},
    { path: '/user/P1/ScienceSheet', name: 'scienceSheet', component: ScienceSheet},
    { path: '/user/P1/EnglishSheet', name: 'englishSheet', component: EnglishSheet},
    { path: '/user/P2/MathSheet1', name: 'mathSheet1', component: MathSheet1},
    { path: '/user/P2/ScienceSheet1', name: 'scienceSheet1', component: ScienceSheet1},
    { path: '/user/P2/EnglishSheet1', name: 'englishSheet1', component: EnglishSheet1},
    { path: '/user/P3/MathSheet2', name: 'mathSheet2', component: MathSheet2},
    { path: '/user/P3/ScienceSheet2', name: 'scienceSheet2', component: ScienceSheet2},
    { path: '/user/P3/EnglishSheet2', name: 'englishSheet2', component: EnglishSheet2},
    { path: '/user/P4/MathSheet3', name: 'mathSheet3', component: MathSheet3},
    { path: '/user/P4/ScienceSheet3', name: 'scienceSheet3', component: ScienceSheet3},
    { path: '/user/P4/EnglishSheet3', name: 'englishSheet3', component: EnglishSheet3},
    { path: '/user/P5/MathSheet4', name: 'mathSheet4', component: MathSheet4},
    { path: '/user/P5/ScienceSheet4', name: 'scienceSheet4', component: ScienceSheet4},
    { path: '/user/P5/EnglishSheet4', name: 'englishSheet4', component: EnglishSheet4},
    { path: '/user/P6/MathSheet5', name: 'mathSheet5', component: MathSheet5},
    { path: '/user/P6/ScienceSheet5', name: 'scienceSheet5', component: ScienceSheet5},
    { path: '/user/P6/EnglishSheet5', name: 'englishSheet5', component: EnglishSheet5},
    { path: '/user/P7/MathSheet6', name: 'mathSheet6', component: MathSheet6},
    { path: '/user/P7/ScienceSheet6', name: 'scienceSheet6', component: ScienceSheet6},
    { path: '/user/P7/EnglishSheet6', name: 'englishSheet6', component: EnglishSheet6},
    { path: '/user/P1/P1Home', name: 'p1', component: P1},
    { path: '/user/P2/P2Home', name: 'p2', component: P2},
    { path: '/user/P3/P3Home', name: 'p3', component: P3},
    { path: '/user/P4/P4Home', name: 'p4', component: P4},
    { path: '/user/P5/P5Home', name: 'p5', component: P5},
    { path: '/user/P6/P6Home', name: 'p6', component: P6},
    { path: '/user/P7/P7Home', name: 'p7', component: P7}
    
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router