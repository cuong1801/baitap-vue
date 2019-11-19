import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Employee'
import DetailPage from '@/components/DetailPage'
import EmployeeApp2 from '@/components/EmployeeApp2'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Employee',
            component: HelloWorld
        },
        {
            path: '/detail/:id',
            name: 'DetailPage',
            component: DetailPage,
            props: true
        },
        {
            path: '/employee2',
            name: 'EmployeeApp2',
            component: EmployeeApp2,
        }
    ]
})