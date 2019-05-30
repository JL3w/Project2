<template>
     <v-layout column>
        <v-flex>
            <div v-for="loadout in loadouts" :key="loadout.title">
                <!-- ASK ABOUT CHANGING PANEL TITLE -->
                <Panel title="Loadout Title">
                    <h2>{{loadout.activity}}</h2>
                    <p>{{loadout.description}}</p>
                    {{loadout.items}}
                </Panel>
                <br>
            </div>
            <!-- <Panel title="Loadouts">
                <div v-for="loadout in loadouts" :key="loadout.title">
                    <h3>{{loadout.title}}</h3>
                    <h5>{{loadout.activity}}</h5>
                    {{loadout.items}}
                </div>
            </Panel> -->
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
                    items: ['TFO 5/6, 9ft', 'Simms Freestone Waders', 'Simms Freestone Boots'],
                    images: []
                },
                {
                    title: 'Test',
                    activity: 'Golf',
                    description: 'I suck at golf.  Why do I continue to embarass myself by playing?  It is a stupid game for old people!',
                    items: ['Driver', 'Putter', 'Irons'],
                    images: []

                }
            ]
        }
    },
    mounted () {
        // request for loadouts
    }
}
</script>

<style scoped>

</style>