import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Loadouts from '@/components/Loadouts';
import CreateLoadout from '@/components/CreateLoadout';
import Details from '@/components/Details';
import Callback from './components/Callback';
import Profile from "./components/Profile.vue";

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: app
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
    },
    {
      path: '/loadouts/create',
      name: 'create',
      component: CreateLoadout
    },
    {
      path: '/loadouts/:loadoutId',
      name: 'details',
      component: Details
    },
    {
      path: '/:token',
      name: 'callback',
      component: Callback
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
  ]
});
