<template>
    <div class="details">
        <br>
        <Panel title="Loadout Details">
            <!-- Code to print Loadout -->
            <!-- {{loadout.title}}-->
            <v-carousel>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </Panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
    data () {
        return {
            loadout: {}
        }
    },
    components: {
        Panel
    }
    
// SERVER CODE GOES HERE //

}
</script>

<style scoped>

</style>