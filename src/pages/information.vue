<script setup>
import TabBar from "../components/TabBar.vue";
import {ref} from "vue";


</script>


<template>

    <div class="base base-container">
      <div class="title">

        <img src="/public/heart-solid-24.png" alt="Favorite icon">
        <h3>{{ paintingTitle }}</h3>
        <img src="/public/language.png" alt="Language Icon">
      </div>
        <div class="container">
          <img class="paintingImg" :src="paintingImg" alt="">
        </div>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "InfoPage",
  props:{
//Painting
    paintingImg: Image,
    paintingTitle: String,
    paintingDate: String,
    paintingInfo: String,
//painter
    painterImg: String,
    painterName: String,
    painterDate: String,
  }
}

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

.paintingImg{
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}



</style>