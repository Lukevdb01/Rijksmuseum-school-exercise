<template>
    <main>

            <h1>404, not found</h1>
            <button @click="router.push('/homepage')">Go to Homepage</button>

    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
main {
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

h1{
  margin-top: 10vh;
}

button{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 0.4375rem;
  background-color: white;
  color: black;
  border-style: none;
  cursor: pointer;
}



</style>