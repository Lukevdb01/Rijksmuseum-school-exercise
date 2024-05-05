<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import TabBar from '../components/TabBar.vue';
import { apiProvider } from '../providers/api';

const router = useRouter();
const objects = ref([]);

const imageItemPressed = async (id) => {
    router.push({path: '/info-page',
        query: {
            id: id,
        }
    });
}

const fetchData = async (object) => {
  try {
    const response = await apiProvider.get(`https://www.rijksmuseum.nl/api/${localStorage.getItem('language')}/collection/${object.id}?key=${import.meta.env.VITE_RIJKSDATA_API_KEY}`);
    if(response && response.artObject) {
      objects.value.push(response.artObject);
    } else {
      error.value = 'No data found';
    }
  } catch (error) {
    error.value = 'Error fetching data: ' + error.message;
    console.error(error);
    alert(error);
  }
};

onMounted(async () => {
    JSON.parse(localStorage.getItem('favorite')).forEach(async (object) => {
        await fetchData(object);
    });
    
});
</script>

<template>
    <div class="container">
            <h1>Favorite</h1>
            <ul>
                <li v-for="(item, index) in objects" :key="index" @click="imageItemPressed(item.objectNumber)">
                    <div class="content">
                        <div>
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.principalMakers[0]?.name }}</p>
                        </div>
                        <img src="/heart-solid-24.png">
                    </div>
                    <img :src="item.webImage.url" alt="painting">
                </li>
            </ul>
        <TabBar />
    </div>
</template>
  
<script>

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background: var(--primary-background-color);
    height: 100vh;
    padding: calc(0.5rem + 0.5vw);
}

.container h1 {
    padding-bottom: 15px;
    color: var(--primary-text-color);
    text-align: center;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    height: 100%;
}

.content {
    position: absolute;
    padding: 15px;
    width: calc(100% - 30px);
    align-items: center;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content img {
    width: 34px;
    height: 34px;
}

li {
    color: var(--primary-text-color);
    height: 100px;

    list-style: none;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
}
</style>