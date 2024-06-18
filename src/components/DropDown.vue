<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  head_title: String,
  namePainter: String,
  date: String,
  description: String,
});

function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = dropdownContent.style.display === "none" ? "flex" : "none";
}

function switchLanguage(newLanguage) {
  localStorage.setItem('language', newLanguage);
  this.$emit('languageChanged', newLanguage);
  location.reload();
}
</script>


<template>
  <div>
    <div id="container">
      <a id="Language" @click="toggleDropdown">Taal</a>
      <div id="dropdownContent">
        <img src="/united-kingdom.svg" alt="" @click="switchLanguage('en')">
        <img src="/netherlands.svg" alt="" @click="switchLanguage('nl')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  methods: {
    switchLanguage(newLanguage) {
      localStorage.setItem('language', newLanguage);
      this.$emit('languageChanged', newLanguage);
      window.location.reload()
    }
  }
}
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#Language{
  cursor: pointer;
}

#dropdownContent {
  display: none;
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
  cursor: pointer;
}
</style>
