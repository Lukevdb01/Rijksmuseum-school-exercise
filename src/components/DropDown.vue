<script setup>

import { defineProps } from 'vue';
import {useRouter} from "vue-router";
let isSpeaking = false;
let utterance = null;

const router = useRouter();
// Define propValue as a prop
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
  if (isSpeaking) {
    speechSynthesis.cancel();
    isSpeaking = false;
  } else {
    if (localStorage.getItem('language') === 'nl') {
      const title = "Titel  " + props.head_title;
      const gemaaktDoor = "Gemaakt door  " + props.namePainter + " Gemaakt in  " + props.date;
      const descriptie = "descriptie  " + props.description;
      utterance = new SpeechSynthesisUtterance(title + gemaaktDoor + descriptie);
      utterance.lang = 'nl-NL'; // Set language to Dutch (Netherlands)

    } else if (localStorage.getItem('language') === 'en') {
      const title = "Title  " + props.head_title;
      const gemaaktDoor = "made by  " + props.namePainter + " made in  " + props.date;
      const descriptie = "description  " + props.description;
      utterance = new SpeechSynthesisUtterance(title + gemaaktDoor + descriptie);
      utterance.lang = 'en-US'; // Set language to English (United States)

    }
    speechSynthesis.speak(utterance);
    isSpeaking = true;
  }
}
</script>

<template>
    <div>
    <img id="Language" src="/language.png" alt="Language Icon" @click="toggleDropdown">
      <div id="dropdownContent">
        <img src="/united-kingdom-flag-icon-png-8.png" alt="" @click="switchLanguage('en')">
        <img src="/dutch.png" alt="" @click="switchLanguage('nl')">
        <img src="/speaker.png" alt="" @click="speechTalk">
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