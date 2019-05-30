import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Example from '@/views/Example';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Loadouts from '@/components/Loadouts';
import NewLoadout from '@/views/NewLoadout';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: app
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/loadouts',
      name: 'loadouts',
      component: Loadouts
    }
    // {
    //   path: '/example/:id',
    //   name: 'example',
    //   component: Example
    // },
    // {
    //   path: '/new',
    //   name: 'new',
    //   component: NewLoadout
    // },

  ]
});
