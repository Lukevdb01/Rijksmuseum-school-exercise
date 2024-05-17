<script setup>

import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";
import DropDown from "../components/DropDown.vue";
import {helper} from "../providers/helper.js";

const router = useRouter();
const collection = ref([]);
const apiData = ref(null);

const favorItem = async (data) => {
  collection.value.push(data);
  localStorage.setItem('favorite', JSON.stringify(collection.value));
}

const handleLanguageChange = async (newLanguage) => {
  apiData.value = await helper.fetchData(router.currentRoute.value.query.id);
}

onMounted(async () => {
  apiData.value = await helper.fetchData(router.currentRoute.value.query.id);
  collection.value = JSON.parse(localStorage.getItem('favorite')) || [];
});

const imgPainting = document.getElementById("imgDisappear")
const backgroundColorDisappear = document.getElementById("backgroundDisappear")
function imgBiggerPainting() {
  imgPainting.display.visible;
  backgroundColorDisappear.display.visible;
  alert('hello')
}

function dissappearImg(){
  imgPainting.display.hidden;
  backgroundColorDisappear.display.hidden;
}

</script>


<template>
  <div class="base base-container">
    <img :src="apiData ? apiData.webImage.url : ''" alt="" id="imgDisappear" >
    <div id="backgroundDisappear" @click="dissappearImg"></div>
    <header>
      <div class="image-container">
        <img class="paintingImg" :src="apiData ? apiData.webImage.url : ''" alt="" id="paintingImg" >
        <div class="gradient-overlay"></div>
        <div id="bottomHeader">
          <h4 class="paintingDate">{{ apiData ? apiData.dating.presentingDate : '' }}</h4>
<<<<<<< HEAD
          <div @click="imgBiggerPainting()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 304 384"  >
            <path  fill="currentColor"
                  d="M43 235v64h64v42H0V235h43zM0 149V43h107v42H43v64H0zm256 150v-64h43v106H192v-42h64zM192 43h107v106h-43V85h-64V43z" /> 
          </svg> </div>
=======
          <img src="/fullscreen.svg" alt="">
>>>>>>> 0aeb0e18ea7ecb8ddbbabc153ded7dfd35d19558
        </div>

      </div>
      <div class="title">
        <img id="Heart" src="/heart.svg" @click="favorItem(router.currentRoute.value.query)"
             alt="Favorite icon">
        <h3>{{ apiData?.title || '' }}</h3>
        <DropDown @languageChanged="handleLanguageChange" :head_title="apiData?.title || ''"
                  :namePainter="apiData?.principalMakers[0]?.name || ''"
                  :description="apiData?.label?.description || ''"
                  :date="apiData?.dating?.presentingDate || ''"/>
      </div>
    </header>
    <main>
      <h4 class="title-main">{{ apiData?.principalMakers[0]?.name || '' }}</h4>
      <div class="dateOfPainter">
        <p>{{ apiData?.principalMakers[0]?.dateOfBirth || '' }}</p>
        <p>-</p>
        <p>{{ apiData?.principalMakers[0]?.dateOfDeath || '' }}</p>
      </div>
      <p id="description">{{ apiData?.label?.description || '' }}</p>
      <div class="button-container">
        <button>Learn More</button>
      </div>
    </main>
    <nav>
      <img src="/arrow-back.svg" alt="back" @click="router.back()">
      <h1>temporary</h1>
    </nav>
  </div>
</template>

<script>
export default {
  name: "info-page",
  components: {
    DropDown,
  },
}
</script>

<style scoped>
nav {
  background-color: var(--tertiary-background-color);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}

nav img {
  width: 38px;
  height: 38px;
}


.base-container {
  color: var(--primary-text-color);

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

#imgDisappear{
  position: absolute;
  width: 100%;
  z-index: 4;
  display: none;
}

#backgroundDisappear{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: var(--primary-background-color);
  display: none;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, rgba(11, 11, 11, 0.00) 0%, #0B0B0B 100%);
}



#bottomHeader{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  position: absolute;
  top: 88%;
  right: 20px;
  left: 20px;
  z-index: 1;
  font-weight: 400;
}

main {
  padding: 20px;
}

.dateOfPainter {
  float: right;
  display: flex;
  gap: 10px;
}

.title-main {
  display: inline;
}

#description {
  font-weight: 500;
  font-size: 1rem;
  padding: 3rem 0 3rem;
}

.button-container {
  display: flex;
  justify-content: center;
}

button {
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

button:hover {
  color: white;
  background-color: #0B0B0B;
  border: 5px solid white;
}

#Heart {
  cursor: pointer;
}

#dropdownContent {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 13px;
  padding: 2px;
  transition: all ease-in 0.6s;
  flex-direction: column;
  gap: 5px;

}

#dropdownContent img {
  text-decoration: none;
  display: block;
  width: 30px;
  height: 30px;
}
</style>