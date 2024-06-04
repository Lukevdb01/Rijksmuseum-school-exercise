<template>
  <div class="base base-container">
    <img src="/public/background.jpg" alt="background image" id="backgroundImg">
    <div id="navbarHome">
      <img src="/public/camera.svg" alt="Camera Icon" class="iconsForLogo">
      <div>
        <img src="/public/rijksmuseum-logo.png" class="logoRijksmuseum" alt="Logo rijksmuseum">
      </div>
      <img src="/public/search.svg" alt="search icon" class="iconsForLogo">
    </div>
    <TabBar/>
  </div>
</template>

<script setup>

import TabBar from "../components/TabBar.vue";
</script>


<style scoped>
.base-container {
  height: 100vh;
  color: var(--primary-text-color);
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


</style>