<template>
   <v-toolbar fixed class="deep-orange darken-3" dark>
       <v-toolbar-title class="mr-4">
           <span class="home" @click="navigateTo({name: 'root'})">
                Loadout
           </span>
       </v-toolbar-title>

       <v-toolbar-items>
           <v-btn flat dark
               @click="navigateTo({name: 'loadouts'})">
               Browse
           </v-btn>
       </v-toolbar-items>

       <v-spacer></v-spacer>

       <v-toolbar-items>
           <v-btn flat dark
                @click.prevent="login">
                Login
            </v-btn>
            <v-btn flat dark
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
       </v-toolbar-items>
   </v-toolbar>
</template>

<script>
export default {
    methods: {
    
    // NOT WORKING //
    navigateTo (route) {
        this.$router.push(route)
        },
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
      this.$router.push({ path: "/" });
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {}
    };
  }
};
</script>

<style scoped>
    .home {
        cursor: pointer;
    }

    .home:hover {
        font-weight: bolder;
    }
</style>
