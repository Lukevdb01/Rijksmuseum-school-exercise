<template>
    <div class="container">
        <h1>Homepage</h1>
        <main>
            <p>Welcome to the homepage</p>
        </main>
        <TabBar />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import TabBar from '../components/TabBar.vue';
const router = useRouter();
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background: var(--primary-background-color);
    height: 100vh;
    padding: calc(0.5rem + 0.5vw);
}

.container h1 {
    padding-bottom: 15px;
    color: var(--primary-text-color);
    text-align: center;
}

main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>