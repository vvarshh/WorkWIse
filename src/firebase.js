import { initializeApp } from "firebase/app";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import './assets/main.css'


const firebaseConfig = {
  apiKey: "AIzaSyCJ56Dc6lkHOcHa1bgjb0cQvFAsgF_cgas",
  authDomain: "workwise-5e049.firebaseapp.com",
  projectId: "workwise-5e049",
  storageBucket: "workwise-5e049.appspot.com",
  messagingSenderId: "21430156356",
  appId: "1:21430156356:web:800e3e02a87e6efb7c1011",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const app = createApp(App);

app.mount("#app");

app.use(router);
export default firebaseApp;
