<script setup>
if(localStorage.getItem('language') === null) {
  localStorage.setItem('language', 'en');
}
</script>

<template>
    <router-view />
</template>

<style scoped></style>
