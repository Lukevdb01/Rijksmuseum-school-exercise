<script setup>
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {apiProvider} from '../providers/api';

const router = useRouter();
const objects = ref([]);

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
  router.push({path: '/info-page',
    query: {
      id: object.objectNumber
    }
  });
}

onMounted(async () => {
  objects.value = await getPaintingInformation(router.currentRoute.value.query.keyword);
});
</script>

<template>
  <ul>
    <li v-for="(object, index) in objects" :key="index" @click="imageItemPressed(object)">
      <img :src="object.webImage.url" alt="painting">
      <h3>{{ object.title }}</h3>
      <p>{{ object.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style scoped>
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
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
  height: 100%;
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
</style>