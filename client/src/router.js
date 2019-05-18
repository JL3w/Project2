import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Example from '@/views/Example';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example/:id',
      name: 'example',
      component: Example
    }
  ]
});
