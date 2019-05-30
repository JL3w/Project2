<template>
   <v-toolbar fixed class="cyan" dark>
       <v-toolbar-title class="mr-4">
           <span @click="navigateTo({name: 'root'})">
                Loadout
           </span>
       </v-toolbar-title>

       <v-toolbar-items>
           <v-btn flat dark>
               Browse
           </v-btn>
       </v-toolbar-items>

       <v-spacer></v-spacer>

       <v-toolbar-items>
           <v-btn flat dark @click="navigateTo({name: 'sign-in'})">
               Sign In
           </v-btn>
       </v-toolbar-items>
   </v-toolbar>
</template>

<script>
export default {
    name: "Header",
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
</style>
