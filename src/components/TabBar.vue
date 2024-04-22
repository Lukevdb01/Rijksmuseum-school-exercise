<template>
    <nav>
        <a href="/favorites" class="tab">
            <img src="/heart.png" alt="Favorite Icon">
        </a>
        <a href="/qr-app" class="tab">
            <img src="/qr-app.png" alt="QR Code Icon">
        </a>
        <a href="/" class="tab">
            <img src="/book.png" alt="Book Icon">
        </a>
    </nav>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 10%;
    }

    .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
    }

    .tab img {
        width: 40%;
        height: auto;
    }
</style>