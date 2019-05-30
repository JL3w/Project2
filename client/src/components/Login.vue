<template>
    <v-layout column>
        <v-flex>
            <div class="white elevation-2">
                <v-toolbar flat dense class="deep-orange darken-3" dark>
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>

                <div class="pl-4 pr-4 pt-2 pb-2">
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
                
                    <div v-html="error" class="error" />
                    
                    <v-btn class="deep-orange darken-3" @click="login" dark>Login</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
    
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login () {

            // SERVER CODE GOES HERE //
           
        }
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
