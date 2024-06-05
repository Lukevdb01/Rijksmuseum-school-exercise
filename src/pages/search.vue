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
   <a href="/qr-app"> <img src="/camera.svg" alt="back"></a>
    <h1>SEARCH</h1>
    <a href="/qr-app"><img id="homeButton" src="/home.svg" alt="" ></a>
  </nav>
  <ul>
    <li v-for="(object, index) in objects" :key="index" @click="imageItemPressed(object)">
      <img :src="object.webImage.url" alt="painting">
      <div class="hero-text">
        <h3>{{ object.title }}</h3>
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
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
}

nav img {
  width: auto;
  height: 30px;
  background-color: var(--primary-background-color);

}

nav a{
  background-color: var(--primary-background-color);

}

#homeButton{
  height: 29px;
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
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

}

img {
  width: 85vw;
  height: 20vh;
  object-fit: cover;
  box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.11);}

h3 {
  margin: 0.5rem 0 0 0;
  font-size: 1.5rem;
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
  padding: calc(0.8rem + 0.5vw);
  border-radius: 0.4375rem;
  background-color: var(--secondary-background-color);
  color: #ffff;
  border-style: none;

  font-size: calc(1rem + 0.5vw);
  text-align: left;
}
</style>