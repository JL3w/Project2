<template>
   <v-toolbar fixed class="deep-orange darken-3" dark>
       <v-toolbar-title class="mr-4">
           <span class="home" @click="navigateTo({name: 'root'})">
                <img class="logo" src="../assets/LoadOut-L.png" @click="navigateTo({name: 'root'})">
                </img>
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
           <v-btn 
                v-if="!isAuthenticated"
                flat dark
                @click.prevent="login">
                Login
            </v-btn>
            <v-btn 
                v-if="isAuthenticated"
                flat dark
                @click.prevent="logout">
                Log out
            </v-btn>
            <v-btn 
                v-if="isAuthenticated"
                flat dark
                @click="navigateTo({name: 'Profile'})">
                Profile
            </v-btn>
       </v-toolbar-items>
   </v-toolbar>
</template>

<script>
import AuthPlugin from "../plugins/auth";
export default {
  name: "Header",
  methods: {
    navigateTo(route) {
        this.$router.push(route)
    },
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
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
  },
};
</script>

<style scoped>
    .home {
        cursor: pointer;
    }

    .home:hover {
        font-weight: bolder;
    }

    .logo {
      height: 20px;
    }
</style>
