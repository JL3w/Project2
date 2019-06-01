<template>
  <div id="app">
    <v-app dark>
      <Header />
      <br><br><br>
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
      <br>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "jquery";

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isAuthenticated: false
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
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
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>
