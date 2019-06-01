<template>
<div dark>
  <h1>Welcome to Loadout!</h1>
  <h4>A place to share what you use for your favorite activities.</h4>
  <br>
  <v-btn id="button" class="deep-orange darken-3" 
          @click="navigateTo({name: 'loadouts'})" 
          dark 
          relative
          center
          bottom
          large>
          Explore Loadouts
  </v-btn>
    
  <v-carousel mb-100 hide-controls hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item"
  ></v-carousel-item>
  </v-carousel>
  <br>
  <br>
  
</div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
    data () {
        return {
          items: [

              'https://images.unsplash.com/photo-1550344681-a4572846afca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
            ,
              'https://images.unsplash.com/photo-1504671496180-901d79454749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            ,
              'https://images.unsplash.com/photo-1550621495-867172e70d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            ,
              'https://images.unsplash.com/photo-1554235166-d457d06a27ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            ,
              'https://cdn.pixabay.com/photo/2014/12/20/09/18/running-573762_1280.jpg'
            ,
              'https://images.unsplash.com/photo-1530028828-25e8270793c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            ,
              'https://cdn.pixabay.com/photo/2015/11/16/06/20/baseball-player-1045263_1280.jpg'
          ]
        }
    },
    components: {
        Panel
    },
    methods: {

        navigateTo (route) {
            this.$router.push(route)
        }
    }
    
// SERVER CODE GOES HERE //

}
</script>

<style scoped>
  h1 {
    color: white;
    font-size: 75px;
  }
  h4 {
    color: white;
  }
  #button {
    z-index: 100;
  }
</style>
