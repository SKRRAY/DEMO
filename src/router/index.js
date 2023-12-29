import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DemoTable from '@/components/DemoTable'
import NewTriggerField from '@/components/NewTriggerField'
import TriggerUser from '@/components/TriggerUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/DemoTable',
      name: 'DemoTable',
      component: DemoTable
    },
    {
      path: '/NewTriggerField',
      name: 'NewTriggerField',
      component: NewTriggerField
    },
    {
      path: '/TriggerUser',
      name: 'TriggerUser',
      component: TriggerUser
    }
  ]
})
