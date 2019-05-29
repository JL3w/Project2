<template>
    <div class="container" id="Header">
        <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" id="logo" href="#">LOADOUT</a>
            <a class="btn btn-outline-primary my-2 my-sm-0" id="login-btn" href=“/auth/google” role="button">Sign With Google</a>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    #logo {
        margin-left: 30px;
    }
    #login-btn {
        margin-right: 30px;
    }
</style>
