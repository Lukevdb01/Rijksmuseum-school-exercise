<template>
  <nav>
    <a id="heart" href="/favorites" class="tab">
      <img src="/heart.svg" alt="Favorite Icon">
    </a>
    <a href="/qr-app" class="tab">
      <img src="/home.svg" alt="Book Icon">
    </a>
    <a href="/" class="tab">
      <img src="/qr-code.svg" alt="QR Code Icon">
    </a>

  </nav>
</template>

<script>
export default {
  name: 'TabBar'
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