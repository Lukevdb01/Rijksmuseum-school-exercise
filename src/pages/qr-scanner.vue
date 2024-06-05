<template>
  <div class="base base-container">
    <img src="/public/background.jpg" alt="background image" id="backgroundImg">
    <div id="navbarHome">

      <img src="/public/camera.svg" alt="Camera Icon" class="iconsForLogo" @click="cameraShow">
      <div>
        <img src="/public/rijksmuseum-logo.png" class="logoRijksmuseum" alt="Logo rijksmuseum">
      </div>
      <a href="/search"> <img src="/public/search.svg" alt="search icon" class="iconsForLogo" > </a>
    </div>

    <TabBar/>
  <div id="container">
    <div class="base flex-image-qr">
      <qrcode-stream @error="onError" @detect="onDetect" class="qr-stream"></qrcode-stream>
    </div>
  </div>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {QrcodeStream} from 'vue-qrcode-reader';
import TabBar from '../components/TabBar.vue'
import {helper} from "../providers/helper.js";

const router = useRouter();
const search = ref('');

function cameraShow() {
  const cameraCont = document.getElementById('container');
  if (cameraCont.style.display === 'none' || cameraCont.style.display === '') {
    cameraCont.style.display = 'block';
  } else {
    cameraCont.style.display = 'none';
  }
}

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
.base-container {
  height: 100vh;
  color: var(--primary-text-color);
  overflow: hidden;
}

.logoRijksmuseum {
  width: 50vw;

}

#navbarHome {
  display: flex;
  width: 100vw;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;


}

#navbarHome div {
  display: flex;
  justify-content: center;
}



#backgroundImg{
position: absolute;
  z-index: -1;
  height: 100vh;
  object-fit: cover;
  width: 100%;
}

.iconsForLogo {
  width: 30px;
  color: var(--primary-text-color);
}

#container {
  display: none;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 80%;
  padding: calc(0.5rem + 0.5vw);
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

</style>