<template>
  <div id="container">
    <a v-if="language === 'nl'" id="Language" @click="toggleDropdown">Taal</a>
    <a v-else id="Language" @click="toggleDropdown">Language</a>
    <div v-show="dropdownVisible" id="dropdownContent">
      <img src="/united-kingdom.svg" alt="English" @click="() => switchLanguage('en')">
      <img src="/netherlands.svg" alt="Dutch" @click="() => switchLanguage('nl')">
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const language = ref('en'); // Default language
const dropdownVisible = ref(false); // State to manage dropdown visibility

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

function switchLanguage(newLanguage) {
  localStorage.setItem('language', newLanguage);
  location.reload(); // Reload the page to apply the new language
}

onMounted(() => {
  // Check local storage for saved language preference on component mount
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage) {
    language.value = storedLanguage;
  }
});
</script>



<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#Language{
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: calc(0.5rem + 0.5vw);
  padding: 16px;
}

#dropdownContent {
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 6px;
  border-radius: 5px;
  transition: all ease-in 0.6s;
  flex-direction: column;
  gap: 5px;
  margin-top: 25px;
}

#dropdownContent img {
  text-decoration: none;
  display: block;
  width: 30px;
  height: 30px;
}

@media screen and (max-width: 768px) {
  #Language{
    font-size: calc(1rem + 1vw);
  }
  #dropdownContent {
    position: absolute;
    background-color: #f9f9f9;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    border-radius: 5px;
    transition: all ease-in 0.6s;
    flex-direction: column;
    top: 0;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
  #dropdownContent img {
    text-decoration: none;
    width: 30vw;
    height: 30vh;
  }

}

</style>