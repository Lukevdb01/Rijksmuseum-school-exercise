<script setup>
import TabBar from "../components/TabBar.vue";
import {ref} from "vue";


</script>


<template>

  <div class="base base-container">
    <header>

      <div class="image-container">
        <img class="paintingImg" :src="paintingImg" alt="">
        <div class="gradient-overlay"></div>
        <h4 class="paintingDate">{{paintingDate}}</h4>
      </div>

      <div class="title">
        <img src="/public/heart-solid-24.png" alt="Favorite icon">
        <h3>{{ paintingTitle }}</h3>
        <img src="/public/language.png" alt="Language Icon">
      </div>


    </header>
    <div class="container">
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "InfoPage",
  props: {
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


.base-container {
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);

}

.title {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: absolute;
  z-index: 1;
  width: 100vw;;
}

.image-container {
  position: absolute;
  overflow: hidden; /* Ensure the gradient doesn't overflow */
  width: 100vw;
}

.paintingImg {
  width: 100vw;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, rgba(11, 11, 11, 0.00) 0%, #0B0B0B 100%);
}

.paintingDate{
  position: absolute;
  top: 88%;
  right: 15px;
  z-index: 1;
  font-weight: 400;

}

</style>