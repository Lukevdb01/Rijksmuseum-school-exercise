<template>
  <div class="base base-container">

  <div class="container">
    <div class="base flex-image-qr">
      <qrcode-stream @error="onError" @detect="onDetect" class="qr-stream"></qrcode-stream>
    </div>
    <div class="search">
      <p>Or enter a painting name</p>
      <input type="text" v-model="search" placeholder="Search for a painting"
             @keyup.enter="router.push({ path: '/search', query: { keyword: search } })">
    </div>
  </div>
  </div>
  <TabBar/>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {QrcodeStream} from 'vue-qrcode-reader';
import TabBar from '../components/TabBar.vue'
import {helper} from "../providers/helper.js";

const router = useRouter();
const search = ref('');

const onError = async (error) => {
  console.error('QR Code Scanner Error:', error);
}

const onDetect = async (codes) => {
  let response = await helper.fetchData(codes.map((code) => code.rawValue));
  router.push({path: '/info-page',
    query: {
      id: response.objectNumber,
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
</script>

<script>
export default {
  components: {QrcodeStream},
}
</script>

<style scoped>
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