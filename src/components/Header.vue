<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">Rijksmuseum schoolopdracht</a>
            <div class="navbar-burger" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div :class="['navbar-menu', { 'is-active': isActive }]">
            <div class="navbar-start">
                <a class="navbar-list-item" href="#">Technologie</a>
                <a class="navbar-list-item" href="#">Credits</a>
                <a class="navbar-list-item" href="/login">Inloggen</a>
                <a class="navbar-list-item special" href="/qr-app">Probeer de app</a>
                <button class="close-button navbar-list-item" @click="toggleMenu">Close</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    height: 60px;
    color: white;
    padding: calc(0.5rem + 0.5vw) calc(2.5rem + 3.5vw) calc(0.15rem + 0.15rem) calc(2.5rem + 3.5vw);
    z-index: 2;
}

.navbar-brand {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand .navbar-item {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
}

.navbar-burger {
    display: none;
    cursor: pointer;
}

.navbar-burger span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: white;
}

.navbar-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease;
    height: 100%;
}

.navbar-start {
    display: flex;
    align-items: center;
    column-gap: calc(1rem + 1vw);
    width: 100%;
}

.navbar-item,
.navbar-list-item {
    color: white;
    text-decoration: none;
    font-size: calc(0.5rem + 0.5vw);
}

.navbar-list-item.special {
    background-color: #D55140;
    width: 200px;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
}

.navbar-menu.is-active {
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-button {
    display: none;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .navbar-menu {
        display: block;
        position: fixed;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background-color: #171717;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .navbar-burger {
        display: block;
        width: auto;
    }

    .navbar-start {
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    .navbar-list-item {
        width: 100%;
        padding: 1rem;
        text-align: center;
        font-size: calc(1rem + 1vw);
    }

    .close-button {
        display: block;
    }
}
</style>