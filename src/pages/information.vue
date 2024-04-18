<script setup>
import TabBar from "../components/TabBar.vue";
import {ref} from "vue";
//Painting
const paintingImg = ref();
const paintingTitle = ref('Information');
const paintingDate = ref();
const paintingInfo = ref();
//painter
const painterImg = ref();
const painterName = ref();
const painterDate = ref();
</script>


<template>

    <div class="base base-container">
      <div class="title">

        <img src="/public/heart-solid-24.png" alt="Favorite icon">
        <h3>{{ paintingTitle }}</h3>
        <img src="/public/language.png" alt="Language Icon">
      </div>
        <div class="container">
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

.title{
  display: flex;
  justify-content: space-between;
  padding: 15px;
}



</style>