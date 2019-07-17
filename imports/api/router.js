import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../ui/views/Login.vue';
import F4 from '../ui/views/f4/F4.vue';

const routes = [
    { path: '/login', component: Login, name: 'Login' },
    { path:'/f4', component: F4, name:'F4'},
     
 /*   {
        path: '/', component: Index, name: 'Home', redirect: '/track',
       
        children: [
            {
                path: 'track',
                name: 'Track',
                component: Track,
                icon:'devices'
            },
            {
                path: 'script',
                name: 'Script',
                component: Script,
                icon:'insert_drive_file'
            },
            {
                path: 'users',
                name: 'Users',
                component: Users,
                icon:'person'
            }
        ]
        
    },
    */
]

export default new VueRouter({
    mode: 'history',
    routes
})