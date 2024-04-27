<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {QrcodeStream} from 'vue-qrcode-reader';

import TabBar from '../components/TabBar.vue'
import {apiProvider} from '../providers/api';

const router = useRouter();
const search = ref('');

const onError = async (error) => {
  try {
    await promise;
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
  const base_url = "https://www.rijksmuseum.nl/api/nl/collection/" + codes.map((code) => code.rawValue) + "?key=" + import.meta.env.VITE_RIJKSDATA_API_KEY;
  let response = await apiProvider.get(base_url);
  response = response.artObject;
  router.push({path: '/info-page',
    query: {
      img: response.webImage.url,
      title: response.title,
      description: response.label.description,
      date: response.dating.presentingDate,
      namePainter: response.principalMakers[0].name,
      DatePainterBorn: response.principalMakers[0].dateOfBirth,
      DatePainterDeath: response.principalMakers[0].dateOfDeath
    }
  });
}
</script>

<template>
  <div class="base base-container">
    <h3>scan the qr code</h3>
    <div class="container">
      <div class="base flex-image-qr">
        <qrcode-stream @error="onError" @detect="onDetect" class="qr-stream"></qrcode-stream>
      </div>
      <div class="search">
        <p>Or enter a painting name</p>
        <input type="text" v-model="search" placeholder="Search for a painting"
               @keyup.enter="router.push({ path: '/search', query: { keyword: search } })">
      </div>
      <TabBar/>
    </div>
  </div>
</template>

<script>
export default {
  components: {QrcodeStream},
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
  padding: calc(0.5rem + 0.5vw);
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