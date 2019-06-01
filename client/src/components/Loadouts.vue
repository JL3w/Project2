<template>
     <v-layout align-center justify-center column>
        <v-flex>
            <br>
            <v-btn class="light-green accent-4 mb-3 mr-3" 
                slot="action"
                @click="navigateTo({name: 'create'})" 
                dark 
                fab
                fixed
                bottom
                right
                large >

            <v-icon>add</v-icon>
            </v-btn>
            <div v-for="loadout in loadouts" :key="loadout.title">

                <Panel :title='loadout.activity'>
                    <h2>{{loadout.title}}</h2>
                    <p>{{loadout.description}}</p>

                    <v-carousel >
                        <v-carousel-item
                            v-for="(item,i) in loadout.items"
                            :key="i"
                            :src="item.image"
                        >
                            <br>
                            <h3 style="color: white">{{item.itemName}}</h3>
                        </v-carousel-item>
                    </v-carousel>

                    <v-btn class="deep-orange darken-3" @click="navigateTo({name: 'details'})" dark>View Details</v-btn>

                </Panel>
                <br>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel';

export default {
    name: "Loadouts",
    components: {
        Panel
    },
    data () {
        return {
            
            // REPLACE BELOW TO ACCESS DB!!!
            // loadouts: null

            loadouts: [
                {
                    title: 'Summer Gear',
                    activity: 'Fly Fishing',
                    description: 'A brief description of my gear and what I use it for',
                    items: [
                        {
                            itemName: 'TFO 5/6, 9ft',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Simms Freestone Waders',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Simms Freestone Boots',
                            image: 'https://via.placeholder.com/150'
                        }]
                },
                {
                    title: 'Test3',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: [
                        {
                            itemName: 'Driver',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Putter',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Irons',
                            image: 'https://via.placeholder.com/150'
                        }]                  
                },
                {
                    title: 'Test2',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: [
                        {
                            itemName: 'Driver',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Putter',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Irons',
                            image: 'https://via.placeholder.com/150'
                        }]                    
                },
                {
                    title: 'Test1',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: [
                        {
                            itemName: 'Driver',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Putter',
                            image: 'https://via.placeholder.com/150'
                        }, 
                        {
                            itemName: 'Irons',
                            image: 'https://via.placeholder.com/150'
                        }]                    
                }
            ]
        }
    },
    methods: {
         navigateTo (route) {
            this.$router.push(route)
        }
    },
    mounted () {
        // request for loadouts
    }
}
</script>

<style scoped>

</style>