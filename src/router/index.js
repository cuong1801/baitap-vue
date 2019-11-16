import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Employee'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Employee',
            component: HelloWorld
        },

    ]
})