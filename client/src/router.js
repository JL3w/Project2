import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Example from '@/views/Example';
import Register from '@/components/Register';
import NewLoadout from '@/views/NewLoadout';


Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'root',
    //   component: Home
    // },
    {
      path: '/register',
      name: 'register',
      component: Register
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
