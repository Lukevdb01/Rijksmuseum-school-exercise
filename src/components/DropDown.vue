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

function speechTalk() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  } else {
    const language = localStorage.getItem('language');
    if (language === 'nl') {
      let utterance = new SpeechSynthesisUtterance(`Titel ${props.head_title} Gemaakt door ${props.namePainter} gemaakt in ${props.date} beschijving ${props.description}`);
      utterance.lang = 'nl-NL'; // Set language to Dutch (Netherlands)
      speechSynthesis.speak(utterance);
    } else if (language === 'en') {
      let utterance = new SpeechSynthesisUtterance(`Title ${props.head_title} Made by ${props.namePainter} made in ${props.date} description ${props.description}`);
      utterance.lang = 'en-US'; // Set language to English (United States)
      speechSynthesis.speak(utterance);
    } else {
      console.error('Unsupported language:', language);
    }
  }
}
</script>

<template>
  <div>
    <img id="Language" src="/translate.svg" alt="Language Icon" @click="toggleDropdown">
    <div id="dropdownContent">
      <img src="/united-kingdom.svg" alt="" @click="switchLanguage('en')">
      <img src="/netherlands.svg" alt="" @click="switchLanguage('nl')">
      <img src="/speaker.svg" alt="" @click="speechTalk">
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
    }
  }
}
</script>

<style scoped>
#dropdownContent {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 13px;
  padding: 2px;
  transition: all ease-in 0.6s;
  flex-direction: column;
  gap: 5px;

}

#dropdownContent img {
  text-decoration: none;
  display: block;
  width: 30px;
  height: 30px;
}
</style>