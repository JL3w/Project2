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

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
  
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>
