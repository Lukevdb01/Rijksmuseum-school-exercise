<template>
    <main>
        <section class="landing-page">
            <nav class="padding-lrtb">
                <a class="head-button" href="/">Probeer de app!</a>
                <div class="nav-button-box">
                    <a>Language</a>
                    <a>Inloggen</a>
                </div>
            </nav>
            <div class="hero-content margin-lr">
                <img src="/rijksmuseum-logo.png" alt="Logo" />
                <h3>Ontdek de kunst met onze innovatieve web-app!</h3>
            </div>
            <div class="page-overlay margin-lrtb">
                <div class="creators">
                    <h1>gebruik de app</h1>
                    <p>Gemaakt door Luke van den Broek & Samed Bozaslan</p>
                </div>
                <h1>sintlucas</h1>
            </div>
        </section>
    </main>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    color: white;
    width: 100%;
}

.head-button {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 0.5rem 2rem;
    font-weight: bold;
    background-color: #D55140;
}

.nav-button-box {
    display: flex;
    gap: 3rem;
}

main {
    height: 100vh;
}

.landing-page {
    position: relative; /* Add this line */
    background-image: url('/background.jpg');
    height: 100%;
    width: 100%;
    background-size: cover;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
}

.page-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    width: auto;
    align-items: end;
    justify-content: space-between;
}

.page-overlay h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: white;

}

.creators {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
}

.creators h1 {
    text-transform: uppercase;
}

.hero-content img {
    width: 100%;
}

.hero-content h3 {
    font-size: 1.5rem;
}

.margin-lr {
    margin: 0 calc(1rem + 1vw);
}

.margin-lrtb {
    margin: calc(1rem + 1vw);
}

.padding-lrtb {
    padding: calc(1rem + 1vw);
}
</style>