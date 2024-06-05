<template>
    <main>
        <section class="landing-page">
            <nav class="padding-lrtb">
                <a class="head-button" href="/qr-app">Probeer de app!</a>
                <div class="nav-button-box">
                    <a href="/">Language</a>
                    <a href="/login">Inloggen</a>
                </div>
            </nav>
            <div class="hero-content margin-lr">
                <img src="/rijksmuseum-logo.webp" alt="Logo" />
                <h2>Ontdek de kunst met onze innovatieve web-app!</h2>
            </div>
            <div class="page-overlay margin-lrtb">
                <div class="creators">
                    <h1>gebruik de app</h1>
                    <p>Gemaakt door Luke van den Broek & Samed Bozaslan</p>
                </div>
                <h1 class="sponsor">sintlucas</h1>
            </div>
        </section>
        <section class="card-page">
            <div>
                <div id="card-a" class="card">
                    <div class="content padding-lrtb">
                        <p class="category">project</p>
                        <h2>de opdracht</h2>
                        <p>wat was de opdracht precies</p>
                    </div>
                </div>
                <div id="card-b" class="card">
                    <div class="content padding-lrtb">
                        <p class="category">fancy frameworks</p>
                        <h2>de technolgie</h2>
                        <p>wat hebben we allemaal gebruikt</p>
                    </div>
                </div>
            </div>
            <div>
                <div id="card-c" class="card">
                    <div class="content padding-lrtb">
                        <p class="category">project groei</p>
                        <h2>het process</h2>
                        <p>De stappen die we hebben gemaakt</p>
                    </div>
                </div>
                <div id="card-d" class="card">
                    <div class="content padding-lrtb">
                        <p class="category">school</p>
                        <h2>Het leermoment</h2>
                        <p>wat hebben we precies geleerd</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="featured-page">
            <h1>wie hebben het project gemaakt</h1>
        </section>
        <footer>
            <p>© 2024 LNME Media & Design | Samed Bozaslan</p>
        </footer>
    </main>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
    title: 'Homepage',
    meta: [
        {
            name: 'description',
            content: 'Gebruik nu onze web-app om de kunst te ontdekken! Gemaakt door Luke van den Broek & Samed Bozaslan.'
        },
        {
            name: 'keywords',
            content: 'web-app, kunst, ontdekken, Luke van den Broek, Samed Bozaslan, Sintlucas, LNME Media & Design, 2024, Rijksmuseum, innovatief, project, technologie, process, leermoment, school, project groei, fancy frameworks, project, opdracht'
        },
        {
            property: 'og:title',
            content: 'Rijksmeum | Ontdek de kunst met onze innovatieve web-app!'
        },
        {
            property: 'og:description',
            content: 'Gebruik nu onze web-app om de kunst te ontdekken! Gemaakt door Luke van den Broek & Samed Bozaslan.'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://www.rijksmuseum.lukevdbroek.nl/'
        },
        {
            property: 'og:image',
            content: 'https://www.awesomewebdevelopment.com/images/og-image.jpg'
        }
    ]
});
</script>

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

.nav-button-box a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

main {
    height: 100vh;
}

.landing-page {
    position: relative;
    /* Add this line */
    background-image: url('/background.webp');
    height: 100%;
    width: 100%;
    background-size: cover;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.1);
    /* Adjust the opacity as needed */
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
    max-width: 100vw;
    height: auto;
}

.hero-content h2 {
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

.card-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}

.card-page div {
    display: flex;
    width: 100%;
    display: flex;
    height: 100%;
}

.card {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: end;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.1);
}

.content {
    display: flex;
    flex-direction: column;
    color: white;
    width: 100%;
    height: 100%;
    justify-content: end;
    align-items: start;
    text-align: start;
}

.content h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
}

.category {
    font-size: 0.8rem;
    padding: 0 0.25rem;
    text-transform: uppercase;
    color: black;
    font-weight: bold;
    background-color: white;
}

#card-a {
    background-image: url('/head_img_card_one.webp');
    background-size: cover;
}

#card-b {
    background-image: url('/head_img_card_two.webp');
    background-size: cover;
}

#card-c {
    background-image: url('/head_img_card_three.webp');
    background-size: cover;
}

#card-d {
    background-image: url('/head_img_card_four.webp');
    background-size: cover;
}

.featured-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    text-transform: uppercase;
    font-size: x-large;
    background-image: url('/bottom_img_one.webp');
    background-size: cover;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    background-color: #272727;
    color: white;
    font-size: 0.75rem;
    text-align: center;
    padding: 0.5rem;
    width: 100%;
}

@media (max-width: 768px) {
    .nav-button-box {
        display: none;
    }

    .sponsor {
        display: none;
    }

    .creators h1 {
        font-size: 1.15rem;
    }

    .creators p {
        font-size: 0.85rem;
    }

    .card-page div {
        flex-direction: column;
    }

    .featured-page {
        text-align: center;
    }
}
</style>