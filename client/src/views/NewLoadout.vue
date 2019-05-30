<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Add New Loadout</v-toolbar-title>
                </v-toolbar>
                
                <div id="newLoadout">
                    <div class="add-item">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name of Item</label>
                            <input type="item" class="form-control" id="exampleFormControlInput1" placeholder="Item Name">
                        </div>
                        <div class="form-group">
                            <label class="custom-file-label" for="customFile">Add Image</label>
                            <input type="file" class="form-control" id="customFile">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <v-btn @click="createLoadout">Create Loadout</v-btn>
                    </div>
                </div>
            </div>
        </v-flex>

    </v-layout>
</template>

<script>
import AddItem from '@/components/AddItem';
import AddDescription from '@/components/AddDescription';

export default {
    name: "NewLoadout",
}
</script>

<style scoped>
    
</style>