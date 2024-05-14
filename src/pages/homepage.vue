<template>
    <main>
        <div class="content">
            <h1>Homepage</h1>
            <button @click="router.push('/qr-app')">Go to QR App</button>
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
}

.content button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #e02121;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

h1 {
    color: #2147e0;
}
</style>