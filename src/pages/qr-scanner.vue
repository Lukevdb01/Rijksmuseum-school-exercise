<script setup>
import TabBar from '../components/TabBar.vue'
import { apiProvider } from '../providers/api';
import { QrcodeStream } from 'vue-qrcode-reader';
import { useRouter } from "vue-router";

const router = useRouter();
let result = null;

const onError = async (error) => {
    try {
        const { capabilities } = await promise;
    } catch (error) {
        if (error.name === 'NotAllowedError') {
            alert('user denied camera access permission');
        } else if (error.name === 'NotFoundError') {
            alert('no suitable camera device installed');
        } else if (error.name === 'NotSupportedError') {
            alert('page is not served over HTTPS (or localhost)');
        } else if (error.name === 'NotReadableError') {
            alert('maybe camera is already in use');
        } else if (error.name === 'OverconstrainedError') {
            alert('did you request the front camera although there is none?');
        } else if (error.name === 'StreamApiNotSupportedError') {
            alert('browser seems to be lacking features');
        }
    }
}

const onDetect = async (codes) => {
    result = JSON.stringify(codes.map((code) => code.rawValue));

    const base_url = "https://www.rijksmuseum.nl/api/nl/collection/" + codes.map((code) => code.rawValue) + "?key=" + import.meta.env.VITE_RIJKSDATA_API_KEY;
    const response = await apiProvider.get(base_url);
    console.log(response);

    const painting = {
        img: response.artObject.webImage.url,
        title: response.artObject.title,
        description: response.artObject.description,
        date: response.artObject.dating.presentingDate,

    }

    router.push({ path: '/info-page', query: { img: painting.img, title: painting.title, description: painting.description, date: painting.date } });
}

const getPaintingBySearch = async (search) => {
    const base_url = "https://www.rijksmuseum.nl/api/nl/collection?key=" + import.meta.env.VITE_RIJKSDATA_API_KEY + "&q=" + search;
    const response = await apiProvider.get(base_url);
    console.log(response);

    const painting = {
        img: response.artObjects[0].webImage.url,
        title: response.artObjects[0].title,
        description: response.artObjects[0].description,
    }

    router.push({ path: '/info-page', query: { img: painting.img, title: painting.title, description: painting.description } });
}

</script>

<template>
    <div class="base base-container">
        <h3>scan the qr code</h3>
        <div class="container">
            <p v-if="result" class="result">{{ result }}</p>
            <div class="base flex-image-qr">
                <qrcode-stream @error="onError" @detect="onDetect" class="qr-stream"></qrcode-stream>
            </div>
            <div class="search">
                <p>Or enter a painting name</p>
                <input type="text" v-model="search" placeholder="Search for a painting" @keyup.enter="getPaintingBySearch(search)">
            </div>
            <TabBar />
        </div>
    </div>
</template>

<script>
export default {
    components: { QrcodeStream },
}
</script>

<style scoped>
.base-container {
    background: var(--primary-background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: calc(1rem + 1vw);
    color: var(--primary-text-color);
}

.container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem + 1vw);
    gap: calc(1rem + 1vw);
    color: black;
}

.flex-image-qr {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-background-color);
    border-radius: calc(1.5rem + 0.5vw);
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.qr-stream {
    width: 100%;
    height: 100%;
}

.search {
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    gap: calc(0.5rem + 0.5vw);
    width: 100%;
}

.search input {
    width: 100%;
    padding: calc(0.5rem + 0.5vw);
    border-radius: calc(0.5rem + 0.5vw);
    border: white 2px solid;
    background-color: var(--primary-background-color);
    color: var(--primary-text-color);
    font-size: calc(1rem + 0.5vw);
    text-align: center;
}
</style>