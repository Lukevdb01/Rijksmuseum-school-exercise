<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const collection = ref([]);

const favorItem = async(data) => {
    collection.value.push(data);

    localStorage.setItem('favorite', JSON.stringify(collection.value));


}

onMounted(async () => {
    collection.value = JSON.parse(localStorage.getItem('favorite'));
});
</script>


<template>

  <div class="base base-container" >

    <header>
      <div class="image-container">
        <img class="paintingImg" :src="router.currentRoute.value.query.img" alt="">
        <div class="gradient-overlay"></div>
        <h4 class="paintingDate">{{router.currentRoute.value.query.date}}</h4>
      </div>

      <div class="title">
        <button @click="favorItem(router.currentRoute.value.query)">Favorite</button>
        <h3>{{ router.currentRoute.value.query.title }}</h3>
        <img src="/public/language.png" alt="Language Icon">
      </div>
    </header>
    <main>
      <h4 class="title-main"> {{router.currentRoute.value.query.namePainter}}</h4>
      <div class="dateOfPainter">
        <p>{{router.currentRoute.value.query.DatePainterBorn}}</p>
        <p>-</p>
        <p>{{router.currentRoute.value.query.DatePainterDeath}}</p>
      </div>

      <p id="description">{{router.currentRoute.value.query.description}}</p>

      <div class="button-container">
      <button>Learn More</button>
      </div>
    </main>

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
  padding: 15px 20px;
  position: absolute;
  z-index: 1;
  width: 100vw;
  top: 0;

}

.image-container {
  position: relative;
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
  right: 20px;
  z-index: 1;
  font-weight: 400;
}

main{
  padding: 20px;
}

.dateOfPainter{
  float: right;
  display: flex;
  gap: 10px;
}

.title-main{
  display: inline;
}

#description{
  font-weight: 500;
  font-size: 1rem;
  padding: 3rem 0 3rem;
}

.button-container{
  display: flex;
  justify-content: center;
}

button{
  align-self: center;
  color: #0B0B0B;
  background-color: white;
  border: 5px solid white;
  padding: 0.5rem 6rem;
  border-radius: 7px;
  font-weight: 500;
  font-size: 1rem;
  transition: all ease-in 0.6s;
  cursor: pointer;
}

button:hover{
  color: white;
  background-color: #0B0B0B;
  border: 5px solid white;

}

</style>