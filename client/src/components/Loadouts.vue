<template>
     <v-layout column>
        <v-flex>
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

                <!-- LIST NOT WORKING -->

                    <div v-for="item in loadout.items" :key="item.itemName">
                        <p>{{item.itemName}}</p>
                    </div>

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
                            itemName: 'TFO 5/6, 9ft'
                        }, 
                        {
                            itemName: 'Simms Freestone Waders'
                        }, 
                        {
                            itemName: 'Simms Freestone Boots'
                        }],
                    images: []
                },
                {
                    title: 'Test',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: [
                        {
                            itemName: 'Driver'
                        }, 
                        {
                            itemName: 'Putter'
                        }, 
                        {
                            itemName: 'Irons'
                        }],                    
                    images: []
                },
                {
                    title: 'Test',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: [
                        {
                            itemName: 'Driver'
                        }, 
                        {
                            itemName: 'Putter'
                        }, 
                        {
                            itemName: 'Irons'
                        }],                    
                    images: []
                },
                {
                    title: 'Test',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: [
                        {
                            itemName: 'Driver'
                        }, 
                        {
                            itemName: 'Putter'
                        }, 
                        {
                            itemName: 'Irons'
                        }],                    
                    images: []
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
    p {
        justify-content: left;
    }
</style>