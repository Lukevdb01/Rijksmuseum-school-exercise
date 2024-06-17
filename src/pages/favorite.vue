<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, onMounted, ref } from "vue";
import TabBar from '../components/TabBar.vue';
import { helper } from "../providers/helper";
import { dbProvider } from "../providers/database";
import { auth } from "../firebase";

const router = useRouter();
const objects = ref([]);

onMounted(async () => {
    dbProvider.get(`favorite`).then(async (data) => {
        objects.value = [];
        data.forEach(async (object) => {
            if(object.id === auth.currentUser.displayName) {
                objects.value.push(await helper.fetchData(object.data.id));
            }
        });
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
                    <img src="/heart.svg">
                    <a @click="helper.shareLink(`https://rijksmuseum.lukevdbroek.nl/info-page?id=${item.objectNumber}`, 'Shared from rijksmuseum application', 'Press on this link to see the painting information')"><img src="/share.svg" alt="Share Icon"></a>
                </div>
                <img :src="item.webImage.url" alt="painting" id="imgPainting">
            </li>
        </ul>
    </div>
  <TabBar />

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

#imgPainting{
  border-radius: 10px;
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
}
</style>