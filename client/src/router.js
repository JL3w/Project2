import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Loadouts from '@/components/Loadouts';
import CreateLoadout from '@/components/CreateLoadout';
import Callback from './components/Callback';
import Profile from "./components/Profile.vue";

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
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
