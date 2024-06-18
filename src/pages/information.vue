<template>
  <div class="base base-container">

    <div id="loader">

    </div>
    <header>
      <div class="image-container">
        <img class="paintingImg" :src="apiData.webImage.url" alt="" id="paintingImg" @load="onImageLoad">
        <div class="gradient-overlay" id="gradient"></div>
        <div id="bottomHeader">
          <h4 class="paintingDate">{{ apiData.dating.presentingDate }}</h4>
         <img src="/eye.svg" alt="" @click="imgSeeBetter">
        </div>
      </div>
      <div class="title">
        <img id="Heart" src="/heart.svg" @click="favorItem(router.currentRoute.value.query)" alt="Favorite icon">
        <h3>{{ apiData.title }}</h3>
        <DropDownInfoPage @languageChanged="handleLanguageChange" :head_title="apiData.title"
          :namePainter="apiData.principalMakers[0].name" :description="apiData.label.description"
          :date="apiData.dating.presentingDate" />
      </div>
    </header>
    <main>
      <h4 class="title-main">{{ apiData.principalMakers[0].name }}</h4>
      <div class="dateOfPainter">
        <p>{{ apiData.principalMakers[0].dateOfBirth }}</p>
        <p>-</p>
        <p>{{ apiData.principalMakers[0].dateOfDeath }}</p>
      </div>
      <p id="description">{{ apiData.label.description }}</p>
    </main>
    <footer>
      <img src="/arrow-back.svg" alt="back" id="return" @click="handlePushback()">
      <p>Return</p>
    </footer>
  </div>
</template>

<script setup>

import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import DropDownInfoPage from "../components/DropDownInfoPage.vue";
import { helper } from "../providers/helper.js";
import { dbProvider } from "../providers/database.js";
import {auth} from "../firebase";

const router = useRouter();
const collection = ref([]);
const apiData = ref(null);

const favorItem = async (data) => {
  if(auth.currentUser) {
    dbProvider.set('favorite/', auth.currentUser.displayName, { id: data.id }); 
    console.log('added to favorite'); 
  } else {
    alert('You need to be logged in to add a favorite');
  }
}

const handlePushback = () => {
  if(!router.back()) {
    router.push({ path: '/homepage' });
  }
}

const handleLanguageChange = async (newLanguage) => {
  apiData.value = await helper.fetchData(router.currentRoute.value.query.id);
}

onBeforeMount(async () => {
  apiData.value = await helper.fetchData(router.currentRoute.value.query.id);
  collection.value = JSON.parse(localStorage.getItem('favorite')) || [];
});



function imgSeeBetter() {
  const gradientElement = document.getElementById('gradient');
  if (gradientElement.style.display === 'none' || gradientElement.style.display === '') {
    gradientElement.style.display = 'block';
  } else {
    gradientElement.style.display = 'none';
  }
}



 const onImageLoad = () => {
   const loader = document.getElementById('loader');

   loader.style.opacity = '0';

   loader.addEventListener('transitionend', () => {
     loader.style.display = 'none';
   }, { once: true });
 }



</script>


<script>
export default {
  name: "info-page",
  components: {
    DropDownInfoPage,
  },
}
</script>

<style scoped>




#return{
  transform: scaleX(-1);
}

#loader{
  background-color: var(--secondary-background-color);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  transition: opacity 2s ease; /* Add transition for opacity */
  opacity: 1; /* Initial opacity */
}


#loader img{
  width: 50%;
}

footer {
  background-color: var(--tertiary-background-color);
  display: flex;
  gap: 40px;
  padding: 1rem;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 1.5rem;
  font-weight: 500;
}



footer img {
  width: 38px;
  height: 38px;
}


main{
  background-color: var(--primary-background-color);

}

.base-container {
  color: var(--primary-text-color);
  height: 100vh;
  background-color: var(--primary-background-color);

}

#gradient {
  animation: ease-in 1s;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
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



#bottomHeader {
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

#bottomHeader a{
  display: flex;
  justify-content: center;
}

main {
  padding: 20px;
}

.dateOfPainter {
  float: left;
  display: flex;
  gap: 10px;
}

.title-main {
}

#description {
  font-weight: 500;
  font-size: 1rem;
  padding: 3rem 0 3rem;
  margin-bottom: 50px;
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
  width: 40px;
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