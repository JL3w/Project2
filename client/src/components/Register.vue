<template>
    <div>
        <h1>Register</h1>

        <input 
            type="email" 
            name="email"
            v-model="email"
            placeholder="email" />
        <br>
        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register () {

            // SERVER CODE GOES HERE //

            await AuthenticationService.register({
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>

<style scoped>
    h1 {
        color: white;
    }

</style>
