<template>
    <v-layout column>
        <v-flex>
            <Panel title="Register">          
                <br>
                <v-text-field light
                    v-model="email"
                    placeholder="Email"
                    solo
                ></v-text-field>
                
                <v-text-field light
                    v-model="password"
                    placeholder="Password"
                    solo
                ></v-text-field>
                
                <v-btn class="deep-orange darken-3" @click="register" dark>Register</v-btn>
            </Panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel';

export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async register () {

            // SERVER CODE GOES HERE //
           
        }
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
    h1 {
        color: white;
    }

    .error {
        color: red;
    }

</style>
