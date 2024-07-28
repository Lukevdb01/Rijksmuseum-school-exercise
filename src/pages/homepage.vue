<template>
  <main>
    <section class="landing-page">
      <Header class="nav" />
      <div class="hero-content margin-lr">
        <img src="/rijksmuseum-logo.webp" alt="Logo" />
        <h2>{{ language === 'nl' ? 'Ontdek de kunst met onze innovatieve web-app!' : 'Discover art with our innovative web app!' }}</h2>
      </div>
      <div class="page-overlay">
        <div class="creators">
          <h1>{{ language === 'nl' ? 'gebruik de app' : 'use the app' }}</h1>
          <p>Gemaakt door Luke van den Broek & Samed Bozaslan</p>
        </div>
        <a href="https://www.sintlucas.nl/">
          <h1 class="sponsor">s<span>i</span>ntlucas</h1>
        </a>
      </div>
    </section>
    <section class="card-page">
      <div>
        <div class="card">
          <div class="content">
            <p class="category">project</p>
            <h2>{{ language === 'nl' ? 'de opdracht' : 'the assignment' }}</h2>
            <p>{{ language === 'nl' ? 'wat was de opdracht precies' : 'what exactly was the assignment' }}</p>
          </div>
          <div class="card-is-hovered">
            <div class="hovered-head-content">
              <h1>{{ language === 'nl' ? 'De opdracht' : 'The assignment' }}</h1>
              <p>{{ language === 'nl' ? 'De opdracht was om een innovatieve web-app te maken voor het Rijksmuseum. waarmee mensen een QR code moesten scannen zodat ze alle informatie over dat schilderij konden zien. Dit was het afsluitende schoolproject voor leerjaar 2 software development op het SintLucas' : 'The assignment was to create an innovative web app for the Rijksmuseum. where people had to scan a QR code so they could see all the information about that painting. This was the final school project for the second year of software development at SintLucas' }}</p>
            </div>
          </div>
          <img src="/head_img_card_one.webp" alt="head_img_card_one" />
        </div>
        <div class="card">
          <div class="content">
            <p class="category">fancy frameworks</p>
            <h2>{{ language === 'nl' ? 'de technologie' : 'the technology' }}</h2>
            <p>{{ language === 'nl' ? 'wat hebben we allemaal gebruikt' : 'what did we use' }}</p>
          </div>
          <div class="card-is-hovered">
            <div class="hovered-head-content">
              <h1>{{ language === 'nl' ? 'De technologie' : 'The technology' }}</h1>
              <p>{{ language === 'nl' ? 'De technologie die we hebben gebruikt is Vue.js, Firebase, Rijksdata API, native browser APIs en nog veel meer. We hebben deze technologieën gebruikt om een web-app te maken die mensen kunnen gebruiken om de kunst in het Rijksmuseum te ontdekken.' : 'The technology we used includes Vue.js, Firebase, Rijksdata API, native browser APIs and much more. We used these technologies to create a web app that people can use to discover art in the Rijksmuseum.' }}</p>
            </div>
          </div>
          <img src="/head_img_card_two.webp" alt="head_img_card_two" />
        </div>
      </div>
      <div>
        <div class="card">
          <div class="content">
            <p class="category">project groei</p>
            <h2>{{ language === 'nl' ? 'het process' : 'the process' }}</h2>
            <p>{{ language === 'nl' ? 'De stappen die we hebben gemaakt' : 'The steps we took' }}</p>
          </div>
          <div class="card-is-hovered">
            <div class="hovered-head-content">
              <h1>{{ language === 'nl' ? 'Het process' : 'The process' }}</h1>
              <p>{{ language === 'nl' ? 'Het process was een lange en leerzaam project. We hebben veel geleerd over Vue.js, Firebase, Rijksdata API en nog veel meer. We hebben veel fouten gemaakt, maar we hebben er ook veel van geleerd. We zijn erg trots op het eindresultaat.' : 'The process was a long and educational project. We learned a lot about Vue.js, Firebase, Rijksdata API, and much more. We made many mistakes, but we also learned a lot from them. We are very proud of the final result.' }}</p>
            </div>
          </div>
          <img src="/head_img_card_three.webp" alt="head_img_card_three" />
        </div>
        <div class="card">
          <div class="content">
            <p class="category">school</p>
            <h2>{{ language === 'nl' ? 'Het leermoment' : 'The learning moment' }}</h2>
            <p>{{ language === 'nl' ? 'wat hebben we precies geleerd' : 'what exactly did we learn' }}</p>
          </div>
          <div class="card-is-hovered">
            <div class="hovered-head-content">
              <h1>{{ language === 'nl' ? 'Het leermoment' : 'The learning moment' }}</h1>
              <p>{{ language === 'nl' ? 'We hebben veel geleerd tijdens dit project. We hebben geleerd hoe we een web-app moeten maken, hoe we een API moeten gebruiken, hoe we een database moeten gebruiken en nog veel meer.' : 'We learned a lot during this project. We learned how to create a web app, how to use an API, how to use a database, and much more.' }}</p>
            </div>
          </div>
          <img src="/head_img_card_four.webp" alt="head_img_card_four" />
        </div>
      </div>
    </section>
    <section class="featured-page">
      <h1>{{ language === 'nl' ? 'wie hebben het project gemaakt' : 'who made the project' }}</h1>
      <img src="/bottom_img_one.webp" alt="head_img_card_three" />
      <div class="featured-page-hover">
        <h2>{{ language === 'nl' ? 'Auteurs' : 'Authors' }}</h2>
        <p>
          {{ language === 'nl'
            ? 'Dit project is gemaakt door Luke van den Broek en Samed Bozaslan. We zijn studenten aan het SintLucas in Nederland. We hebben dit project gemaakt als onderdeel van ons tweede jaar softwareontwikkeling. We zijn erg trots op het resultaat en we hopen dat je plezier hebt met het gebruik van onze web-app!'
            : 'This project was made by Luke van den Broek and Samed Bozaslan. We are students at SintLucas in the Netherlands. We made this project as part of our second year software development course. We are very proud of the result and we hope you enjoy using our web app!'
          }}
        </p>
        <div class="links">
          <a href="https://www.linkedin.com/in/luke-vd-broek/">
            {{ language === 'nl' ? 'Luke van den Broek' : 'Luke van den Broek' }}
          </a>
          <a href="https://www.linkedin.com/in/samed-bozaslan/">
            {{ language === 'nl' ? 'Samed Bozaslan' : 'Samed Bozaslan' }}
          </a>
        </div>
      </div>
    </section>
    <footer>
      <p>© 2024 LNME Media & Design | Samed Bozaslan</p>
    </footer>
  </main>
</template>


<script setup>
import { useHead } from '@vueuse/head';
import { onBeforeMount, ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import Header from '../components/Header.vue';

const router = useRouter();
const auth = getAuth();
const isAuthenticated = ref(false);
const language = ref('en');

useHead({
  title: 'Homepage',
  meta: [
    { name: 'description', content: 'Gebruik nu onze web-app om de kunst te ontdekken! Gemaakt door Luke van den Broek & Samed Bozaslan.' },
    { name: 'keywords', content: 'web-app, kunst, ontdekken, Luke van den Broek, Samed Bozaslan, Sintlucas, LNME Media & Design, 2024, Rijksmuseum, innovatief, project, technologie, process, leermoment, school, project groei, fancy frameworks, project, opdracht' },
    { property: 'og:title', content: 'Rijksmeum | Ontdek de kunst met onze innovatieve web-app!' },
    { property: 'og:description', content: 'Gebruik nu onze web-app om de kunst te ontdekken! Gemaakt door Luke van den Broek & Samed Bozaslan.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.rijksmuseum.lukevdbroek.nl/' },
    { property: 'og:image', content: 'https://www.awesomewebdevelopment.com/images/og-image.jpg' }
  ]
});

onBeforeMount(() => {
  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage) {
    language.value = storedLanguage;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      isAuthenticated.value = true;
      console.log("User is logged in!");
    } else {
      isAuthenticated.value = false;
      console.log("User is logged out!");
    }
  });
});

function updateLanguage(newLanguage) {
  language.value = newLanguage;
}


</script>

<style scoped>
main {
    height: 100vh;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.nav {
    padding-bottom: calc(0.5rem + 0.5vw);
}

.landing-page {
    display: flex;
    flex-direction: column;
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
    padding: calc(2.5rem + 3.5vw) calc(2.5rem + 3.5vw) 0 calc(2.5rem + 3.5vw);
    margin-bottom: calc(1.75rem + 1.75vw);
    justify-content: space-between;
}

.page-overlay a {
    text-decoration: none;
}

.page-overlay h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: white;
}

.page-overlay h1 span {
    text-transform: none;
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
    margin: 0 calc(2.5rem + 3.5vw);
}

.margin-lrtb {
    margin: calc(1rem + 1vw);
}

.padding-lrt {
    padding: calc(1rem + 1vw) calc(2.5rem + 3.5vw) 0;
}

.padding-lr {
    padding: 0 calc(2.5rem + 3.5vw);
}

.padding-lrtb {
    padding: calc(2.5rem + 3.5vw);
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
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: end;
    background-color: rgba(0, 0, 0, 0.1);
    background-size: 150px 150px;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    z-index: -1;
    transition: all 0.6s ease-in-out;
}



.card-is-hovered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
}

.hovered-head-content {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    text-align: center;
    color: white;
    width: 100%;
    height: 100%;
}

.hovered-head-content p {
    width: 80%;
}

.card:hover img {
    transform: scale(1.05);
    filter: grayscale(100%);
}

.card:hover .card-is-hovered {
    opacity: 1;
}

.card:hover .content {
    opacity: 0;
}

.content {
    display: flex;
    flex-direction: column;
    opacity: 1;
    padding: calc(1rem + 1vw) calc(2.5rem + 3.5vw) calc(1.75rem + 1.75vw);
    color: white;
    width: 100%;
    height: 100%;
    transition: all 0.6s ease-in-out;
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

.featured-page-hover {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-transform: none;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
}

.featured-page {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    text-transform: uppercase;
    font-size: x-large;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    overflow: hidden;
}

.featured-page h1 {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
}

.featured-page img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    z-index: -1;
    transition: all 0.6s ease-in-out;
}

.links {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    border-top: solid 4px white;
}

.links a {
    margin-top: 10px;
    font-size: x-medium;
    color: rgb(129, 129, 255);
}

.featured-page:hover img {
    transform: scale(1.05);
    filter: grayscale(100%);
}

.featured-page:hover .featured-page-hover {
    opacity: 1;
}

.featured-page:hover h1 {
    opacity: 0;
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

@media (max-width: 890px) {
    .nav-button-box {
        display: none;
    }

    .sponsor {
        display: none;
    }

    .creators h1 {
        width: 100%;
        font-size: 1.15rem;
        text-align: center;
    }
    
    .creators p {
        text-align: center;
        font-size: 0.85rem;
    }

    .card-page div {
        flex-direction: column;
    }

    .featured-page {
        text-align: center;
    }

    .head-button {
        font-size: 15px;
        padding: calc(1.25rem - 0.5rem) 20px;
    }

    .hero-content h2 {
        font-size: 1.25rem;
    }

    .links a {
        font-size: 1.25rem;
    }

    .featured-page-hover p {
        width: 90%;
        font-size: 1.25rem;
    }
}

@media (max-width: 1024px) {
    .page-overlay {
        flex-direction: column;
        align-items: center;
    }

    .creators {
        align-items: center;
    }

    .creators h1 {
        font-size: 1.15rem;
    }

    .creators p {
        font-size: 0.85rem;
    }

    .sponsor {
        display: none;
    }

    .card-page div {
        flex-direction: column;
    }

    .featured-page {
        text-align: center;
    }

    .margin-lr {
        margin: 0 calc(1rem + 1vw);
    }


    .padding-lrt {
        padding: calc(0.5rem + 0.5vw) calc(2rem + 3vw) 0;
    }

    .padding-lr {
        padding: 0 calc(1.5rem + 2.5vw);
    }

    .padding-lrtb {
        padding: calc(1.5rem + 2.5vw);
    }

    .landing-page .nav {
        padding: 0 calc(1rem + 1vw);
    }

    .content {
        padding: 0;
        padding-left: calc(1rem + 1vw);
        padding-bottom: calc(1rem + 1vw);
    }

    .page-overlay {
        padding: calc(1rem + 1vw);
        padding-left: calc(1rem + 1vw);
        padding-bottom: calc(0.5rem + 0.5vw);
    }
}
</style>