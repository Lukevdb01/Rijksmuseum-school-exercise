<template>
    <nav>
        <a href="/favorites" class="tab">
            favorite
        </a>
        <a href="/qr-scanner" class="tab">
            qr-scanner
        </a>
        <a href="/" class="tab">
            home
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
</style>