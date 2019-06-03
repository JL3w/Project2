<template>
    <v-layout column>
        <v-flex>
            <br>
            <Panel title="New Loadout">
                <br>
                <v-text-field light
                    v-model="loadout.activity"
                    placeholder="Activity"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.title"
                    placeholder="Title"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.description"
                    placeholder="Description"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items.name"
                    placeholder="Item"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items.imageURL"
                    placeholder="Image URL"
                    solo
                ></v-text-field>

                <v-btn class="deep-orange darken-3" @click="create" dark>Create</v-btn>

            </Panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'

export default {
    data () {
        return {
            loadout: {
                title: null,
                activity: null,
                description: null,
                items: {
                    name: null,
                    imageURL: null,
                }
            }
        }
    },
    methods: {
        create () {
            // API code
        }
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
   
</style>