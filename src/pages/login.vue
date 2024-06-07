<template>
    <div class="login-container">
        <div class="login-box">
            <img src="/rijksmuseum-logo-black.webp" alt="Logo" />
            <form>
                <input type="text" id="email" placeholder="Email" v-model="email" />
                <input type="password" id="password" placeholder="Password" v-model="password" />
                <button type="submit" @click="logIn">Login</button>
                <a href="/signup">Sign up</a>
              <div class="button-box">
                <a>
                  <img src="/github_logo.svg" alt="">
                  <p>Sign in with github</p>
                </a>
                <a>

                  <img src="/google_logo.svg" @click="signInWithGoogle" alt="">
                  <p>Sign in with google</p>
                </a>
              </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {useRouter } from "vue-router";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
const email = ref("");
const password = ref("")
const errMsg = ref()
const router = useRouter();

const logIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("successfully loggedIn!")
        router.push("/homepage")
        alert('loggedIn')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });



}

const signInWithGoogle = () => {

}


</script>

<style>
.login-container {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e2e2e2;
    width: 100%;
}

.login-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    height: 380px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 15px;
    text-align: center;
}

.login-box img {
    width: 100%;
    color: #007bff;
}

.login-box form input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
}

.login-box form button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;
    gap: 10px;
}

.button-box a {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    background: #ececec;
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    gap: 10px;
}

.button-box a p {
    margin-right: 1rem;
}

.button-box a img {
    width: 32px;
    height: auto;

}

#signInButton{
  margin-top: 10px;
}


@media screen and (max-width: 600px) {
    .login-box {
        width: 85%;
    }
    
    .button-box a p {
        font-size: 0.5rem;
    }

    .button-box a img {
        width: 22px;
    }

    .login-box {
        height: 325px;
    }
}
</style>