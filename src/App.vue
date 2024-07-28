<template>
    <router-view />
</template>

<script setup>
import { auth } from "./firebase";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

const router = useRouter();

if(localStorage.getItem('language') === null) {
  localStorage.setItem('language', 'en');
}

if(onAuthStateChanged(auth, (user) => {
  if (!user && router.currentRoute.value.path == "/favorites") {
    router.push("/login");
  } else if (user && router.currentRoute.value.path == "/login") {
    router.back();
  }
}));
</script>

<style scoped></style>
