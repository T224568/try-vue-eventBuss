import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Hello3 from './components/HelloWorld_ini.vue'
import About from './components/About.vue'
import Hello from './components/hello.vue'
import A from './components/a.vue'
import Bparams from './components/Bparams.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Hello3,
    },
    {
      path: '/hello3',
      name:'hello3',
      component: HelloWorld,
    },
    {
      path: '/about',
      name:'about',
      component: About,
    },
    {
        path: '/hello',
      name: 'hello',
      component: Hello
      
    },
    {
        path: "/a/:id",
        name: "User",
        component: A,
        props: true
      },
      {
        path: "/b-params",
        name: "Bparams",
        component: Bparams,
        props: (route) => route.params
    },
    { path: '/*', redirect: '/' }
  ]
})