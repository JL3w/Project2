<template>
    <v-layout column>
        <v-flex>
            <br>
            <!-- <v-btn class="light-green accent-4 mb-3 mr-3" 
                slot="action"
                @click="addField" 
                dark 
                fab
                fixed
                bottom
                right
                large >
                <v-icon>add</v-icon> -->
            </v-btn>
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
                    v-model="loadout.items[0].name"
                    placeholder="Item 1"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items[0].imageURL"
                    placeholder="Image URL 1"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items[1].name"
                    placeholder="Item 2"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items[1].imageURL"
                    placeholder="Image URL 2"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items[2].name"
                    placeholder="Item 3"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items[2].imageURL"
                    placeholder="Image URL 3"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items[3].name"
                    placeholder="Item 4"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items[3].imageURL"
                    placeholder="Image URL 4"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items[4].name"
                    placeholder="Item 5"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items[4].imageURL"
                    placeholder="Image URL 5"
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
                items: [
                    {
                        name: null,
                        imageURL: null,
                    },
                    {
                        name: null,
                        imageURL: null,
                    },
                    {
                        name: null,
                        imageURL: null,
                    },
                    {
                        name: null,
                        imageURL: null,
                    },
                    {
                        name: null,
                        imageURL: null,
                    }
                ]

                },
              
            }
    },
    methods: {
        create() {
            // API code
        },
        addRow() {
            //
        }
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
   
</style>