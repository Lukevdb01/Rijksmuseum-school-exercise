<script setup>
import InfoPage from './pages/information.vue';


</script>

<template>
    <info-page :painting-title="'Information'" :painting-img="'/example-monalisa.jpg'"></info-page>

    <router-view />
</template>

<style scoped>

</style>
