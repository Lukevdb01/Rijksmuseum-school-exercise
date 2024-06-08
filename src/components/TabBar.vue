<template>
  <nav>
    <a id="heart" href="/favorites" class="tab">
      <img src="/heart.svg" alt="Favorite Icon">
    </a>
    <a href="/qr-app" class="tab">
      <img src="/home.svg" alt="Book Icon">
    </a>
    <a href="/homepage" class="tab">
      <img src="/qr-code.svg" alt="QR Code Icon">
    </a>

  </nav>
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
  router.push({
    path: '/info-page',
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


nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0;
  background: #2A2A2A;
}



.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;


}

.tab img {
  width: 40%;
  height: auto;
}
</style>