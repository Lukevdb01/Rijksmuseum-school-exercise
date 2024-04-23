<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>


<template>

  <div class="base base-container">
    <header>

      <div class="image-container">
        <img class="paintingImg" :src="router.currentRoute.value.query.img" alt="">
        <div class="gradient-overlay"></div>
        <h4 class="paintingDate">{{router.currentRoute.value.query.date}}</h4>
      </div>

      <div class="title">
        <img src="/public/heart-solid-24.png" alt="Favorite icon">
        <h3>{{ router.currentRoute.value.query.title }}</h3>
        <img src="/public/language.png" alt="Language Icon">
      </div>



    </header>
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  name: "info-page",
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
  width: 100vw;
  ;
}

.image-container {
  position: absolute;
  overflow: hidden;
  /* Ensure the gradient doesn't overflow */
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