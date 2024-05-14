<template>
    <main>
        <div class="content">
            <h1>404, <span>not found</span></h1>
            <button @click="router.push('/')">Go to Homepage</button>
        </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.content {
    text-align: center;
    color: black;
}
</style>