<template>
    <v-layout column>
        <v-flex>
            <br>
            <v-btn class="light-green accent-4 mb-3 mr-3" 
                slot="action"
                @click="addField" 
                dark 
                fab
                fixed
                bottom
                right
                large >
                <v-icon>add</v-icon>
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
                    v-model="loadout.items.item[0].name"
                    placeholder="Item"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[0].imageURL"
                    placeholder="Image URL"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[1].name"
                    placeholder="Item"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[1].imageURL"
                    placeholder="Image URL"
                    solo
                ></v-text-field>
                <v-btn class="deep-orange darken-3" @click="addRow" dark>Create</v-btn>
                <v-text-field light
                    v-model="loadout.items.item[2].name"
                    placeholder="Item"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[2].imageURL"
                    placeholder="Image URL"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[3].name"
                    placeholder="Item"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[3].imageURL"
                    placeholder="Image URL"
                    solo
                ></v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[4].name"
                    placeholder="Item"
                    solo
                >
                </v-text-field>
                <v-text-field light
                    v-model="loadout.items.item[4].imageURL"
                    placeholder="Image URL"
                    solo
                ></v-text-field>
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
                    item: {
                        name: null,
                        imageURL: null,
                    },
                    item: {
                        name: null,
                        imageURL: null,
                    },
                    item: {
                        name: null,
                        imageURL: null,
                    },
                    item: {
                        name: null,
                        imageURL: null,
                    },
                    item: {
                        name: null,
                        imageURL: null,
                    }

                }
            }
        }
    },
    methods: {
        create() {
            // API code
        },
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
   
</style>