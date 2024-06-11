<template>
    <router-view />
</template>

<script setup>
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

const router = useRouter();
const auth = getAuth();

if(localStorage.getItem('language') === null) {
  localStorage.setItem('language', 'en');
}

if(onAuthStateChanged(auth, (user) => {
  if (!user && router.currentRoute.value.path == "/favorites") {
    router.push("/login");
  }
}));
</script>

<style scoped></style>
