<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import DropDown from "../components/DropDown.vue";
import { apiProvider } from "../providers/api.js";

const router = useRouter();
const collection = ref([]);
const apiData = ref(null);

const favorItem = async (data) => {
  collection.value.push(data);
  localStorage.setItem('favorite', JSON.stringify(collection.value));
}

const fetchData = async () => {
  try {
    const response = await apiProvider.get(`https://www.rijksmuseum.nl/api/${localStorage.getItem('language')}/collection/${router.currentRoute.value.query.id}?key=${import.meta.env.VITE_RIJKSDATA_API_KEY}`);
    if (response && response.artObject) {
      apiData.value = response.artObject;
      console.log(response.artObject);
    } else {
      alert('No data found');
    }
  } catch (error) {
    alert('Error fetching data: ' + error.message);
  }
};

const handleLanguageChange = async (newLanguage) => {
  await fetchData(newLanguage);
}

onMounted(async () => {
  await fetchData();
  collection.value = JSON.parse(localStorage.getItem('favorite')) || [];
});
</script>


<template>
  <div class="base base-container">

    <header>
      <div class="image-container">
        <img class="paintingImg" :src="apiData ? apiData.webImage.url : ''" alt="">
        <div class="gradient-overlay"></div>
        <h4 class="paintingDate">{{ apiData ? apiData.dating.presentingDate : '' }}</h4>
      </div>
      <div class="title">
        <img id="Heart" src="/public/heart-solid-24.png" @click="favorItem(router.currentRoute.value.query)"
          alt="Favorite icon">
        <h3>{{ apiData?.title || '' }}</h3>
        <DropDown @languageChanged="handleLanguageChange" :head_title="apiData?.title || ''"
          :namePainter="apiData?.principalMakers[0]?.name || ''" :description="apiData?.label?.description || ''"
          :date="apiData?.dating?.presentingDate || ''" />
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

.paintingDate {
  position: absolute;
  top: 88%;
  right: 20px;
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