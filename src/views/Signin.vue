<template>
    <h1> Sign In </h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model= "password" /></p>
    <p v-if="errMsg">{{  errMsg }}</p>
    <p><button @click="register">Submit</button></p>

</template>

<script setup>

import {ref} from "vue"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter(); 
const email = ref(""); 
const password = ref(""); 
const errMsg = ref();

const register = () => { 
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => { 
        console.log("Registered!!"); 
        router.push('/feed');
    })
    .catch((error) => {
        console.log("error.code"); 
        switch(error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email"; 
                break; 
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break; 
                case "auth/wrong-password":
                errMsg.value = "Incoorect password"; 
                break; 
        }
        alert(error.message); 
    }); 

};


</script>