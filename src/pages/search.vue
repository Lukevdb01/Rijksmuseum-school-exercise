<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useRouter } from 'vue-router';
import { apiProvider } from '../providers/api';
import { helper } from '../providers/helper';

const router = useRouter();
const objects = ref([]);
const search = ref('');

const getPaintingInformation = async (input) => {
  const base_url = `https://www.rijksmuseum.nl/api/${localStorage.getItem('language')}/collection?key=` + import.meta.env.VITE_RIJKSDATA_API_KEY + "&q=" + input;
  const response = await apiProvider.get(base_url);
  if (response.length === 0) {
    alert("No painting found with that name");
  } else {
    return response.artObjects;
  }
}

const imageItemPressed = async (object) => {
  const response = await helper.fetchData(object.objectNumber);
  router.push({
    path: '/info-page',
    query: {
      id: object.objectNumber,
      title: response.title,
      description: response.label.description,
      image: response.webImage.url,
      date: response.dating.presentingDate,
      name: response.principalMakers[0].name,
      birthDate: response.principalMakers[0].dateOfBirth,
      deathDate: response.principalMakers[0].dateOfDeath,
    }
  });
}

const handleSearch = () => {
  router.push({ path: '/search', query: { keyword: search.value } }).then(() => {
    window.location.reload();
  });
};

onMounted(async () => {
  objects.value = await getPaintingInformation(router.currentRoute.value.query.keyword);
});

onUpdated(async () => {
  objects.value = await getPaintingInformation(router.currentRoute.value.query.keyword);
});
</script>


<template>
  <div class="base base-container">
  <nav>
    <img src="/arrow-back.svg" alt="back" @click="router.back()">
    <h1>Search results</h1>
  </nav>
  <ul>
    <li v-for="(object, index) in objects" :key="index" @click="imageItemPressed(object)">
      <img :src="object.webImage.url" alt="painting">
      <div class="hero-text">
        <h3>{{ object.title }}</h3>
        <p>{{ object.description }}</p>
      </div>
    </li>
  </ul>
    <div class="search">
    <input type="text" v-model="search" placeholder="Search for a painting"
           @keyup.enter="handleSearch">
    </div>
  </div>
</template>

<style scoped>
.base-container{
  background-color: var(--primary-background-color);
}

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

ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);
}

li {
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--secondary-background-color);
  gap: 20px;
}

img {
  width: 35%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
}

h3 {
  margin: 1rem 0;
  font-size: 1.5rem;
}

p {
  margin: 1rem 0;
  font-size: 1rem;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(0.5rem + 0.5vw);
  width: 100%;
  position: fixed;
  bottom: 20px;
  align-items: center;
}

.search input {
  width: 90%;
  padding: calc(0.5rem + 0.5vw);
  border-radius: calc(0.5rem + 0.5vw);
  border: white 2px solid;
  background-color: var(--primary-background-color);
  color: var(--primary-text-color);
  font-size: calc(1rem + 0.5vw);
  text-align: left;
}
</style>