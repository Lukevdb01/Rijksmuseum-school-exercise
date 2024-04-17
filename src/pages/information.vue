<script setup>
import TabBar from "../components/TabBar.vue";
import {ref} from "vue";
//Painting
const paintingImg = ref();
const paintingTitle = ref();
const paintingDate = ref();
const paintingInfo = ref();
//painter
const painterImg = ref();
const painterName = ref();
const painterDate = ref();
</script>


<template>

    <div class="base base-container">
        <h3>Information</h3>
        <div class="container">
            <p>Information about the app</p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.base-container{
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);
}
</style>