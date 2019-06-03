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

                <Panel :title='loadout.activity' id="loadout">
                    <h2>{{loadout.title}}</h2>
                    <p>{{loadout.description}}</p>

                    <v-carousel >
                        <v-carousel-item
                            v-for="(item,i) in loadout.items"
                            :key="i"
                            :src="item.image"
                        >
                            <br>
                            <h3 class="item-name">{{item.itemName}}</h3>
                        </v-carousel-item>
                    </v-carousel>

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
                            image: 'http://www.burfish.com/Merchant2/graphics/00000001/bvk_nxt_combo_tfo.jpg'
                        }, 
                        {
                            itemName: 'Simms Freestone Waders',
                            image: 'http://flyandlure.org/images/uploads/large/b02d79bb02d6fe7337e141ae51e4c273.jpg'
                        }, 
                        {
                            itemName: 'Simms Freestone Boots',
                            image: 'https://www.theflystop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/B/T/BTKA_15472505031762176_aba661d9602436bc24300ac735cf37.jpg'
                        }]
                },
                {
                    title: 'The Green Mile',
                    activity: 'Golf',
                    description: 'A driver for long shots, a putter for the greens, and irons for the approach.',
                    items: [
                        {
                            itemName: 'Driver',
                            image: 'https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/149/63/120765301.jpg'
                        }, 
                        {
                            itemName: 'Putter',
                            image: 'https://side-saddle-putting.com/wp-content/uploads/2017/11/GP-ball-pickup-2-shop-292k-1.jpg'
                        }, 
                        {
                            itemName: 'Irons',
                            image: 'https://imgs.2ndswing.com/images/clean-product/large/G410%20NEW%20STS.jpg'
                        }]                  
                },
                {
                    title: 'Gridiron Gang',
                    activity: 'Football',
                    description: 'Top of the line pads, helmet, and cleats to keep you at the top of your game.',
                    items: [
                        {
                            itemName: 'XTECH Pads',
                            image: 'https://static1.squarespace.com/static/5554d0bae4b00483b17de010/t/5c4cad017ba7fc11fdd20138/1548528972069/SuperSkill_Back_Black.jpg?format=500w'
                        }, 
                        {
                            itemName: 'Riddell',
                            image: 'https://www.chicagomag.com/Chicago-Magazine/January-2018/Riddell-Football-Helmets-InSite/helmet-900.jpg'
                        }, 
                        {
                            itemName: 'OBJs',
                            image: 'https://sneakerfreaker-cdn.s3-accelerate.amazonaws.com/image/nike-air-force-1-utility-obj-cleat-red-1.jpg?mtime=20181127042849'
                        }]                    
                },
                {
                    title: '2K Gear',
                    activity: 'Basketball',
                    description: 'Everything you need to ball out and drop a triple-double.',
                    items: [
                        {
                            itemName: 'Nike Aeroswift 2 in 1 3QT',
                            image: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201703/15/00199440603787____1__640x640.jpg'
                        }, 
                        {
                            itemName: 'Kyrie 5',
                            image: 'https://www.fitmysole.com/wp-content/uploads/2018/11/2018-Nike-Kyrie-5-Galaxy-Multi-Color-AO2918-900-For-Sale.jpg'
                        }, 
                        {
                            itemName: 'Nike Gym Club',
                            image: 'https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dwf4ba0533/88273_186950_1.jpg?sw=1694&sh=1999&sm=fit'
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
    .item-name {
        color: white;
        text-shadow: -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
    }
    #loadout {
        min-width: 800px;
    }
</style>