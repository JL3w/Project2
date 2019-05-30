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
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';

export default {
  name: 'app',
  components: {
    Header
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
