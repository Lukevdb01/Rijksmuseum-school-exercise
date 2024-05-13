<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import TabBar from '../components/TabBar.vue';
import { apiProvider } from '../providers/api';

const router = useRouter();
const objects = ref([]);

const fetchData = async (object) => {
    try {
        const response = await apiProvider.get(`https://www.rijksmuseum.nl/api/${localStorage.getItem('language')}/collection/${object.id}?key=${import.meta.env.VITE_RIJKSDATA_API_KEY}`);
        if (response && response.artObject) {
            objects.value.push(response.artObject);
        } else {
            alert('No data found');
        }
    } catch (error) {
        alert('Error fetching data: ' + error.message);
    }
};

function shareLink(id) {
  const link = `https://rijksmuseum.lukevdbroek.nl/info-page?id=${id}`;

  if (navigator.share) {
    navigator.share({
      title: 'Title of the shared content',
      text: 'Description of the shared content',
      url: link,
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("Your browser doesn't support the Web Share API");
  }
}

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
            <li v-for="(item, index) in objects" :key="index">
                <div class="content">
                    <div>
                        <h2 @click="router.push({ path: '/info-page', query: { id: item.objectNumber, } })">{{ item.title }}</h2>
                        <p>{{ item.principalMakers[0]?.name }}</p>
                    </div>
                    <img src="/heart-solid-24.png">
                    <a @click="shareLink(item.objectNumber)"><img src="/share.png" alt="Share Icon"></a>
                </div>
                <img :src="item.webImage.url" alt="painting">
            </li>
        </ul>
        <TabBar />
    </div>
</template>

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