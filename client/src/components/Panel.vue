<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="deep-orange darken-3" dark>
            <v-toolbar-title id="title">{{title}}</v-toolbar-title>
        </v-toolbar>

        <slot name="action" />

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
                No slot content defined.
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]  
}
</script>

<style scoped>

</style>