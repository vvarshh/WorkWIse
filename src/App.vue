

<template>
  <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/feed"> Feed </router-link> |
    <router-link to="/register"> Register </router-link> |
    <router-link to="/sign-in"> Login </router-link> |
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out
    </button>
  </nav>
<router-view/>
</template>
 
<script>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
const isLoggedIn = ref(false);
let auth; 
onMounted(() => { 
  auth = getAuth(); 
  onAuthStateChanged(auth, (user) => { 
    if (user) {
      isLoggedIn.value = true; 
    } else { 
      isLoggedIn.value = false; 
    }
  });

});
 const handleSignOut = () => { 
   signOut(auth).then(() => { 
     router.push("/");

   });
 };

</script>

<style>
#app {
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#ebf0f7;
  margin-top: 30px;
  display: inline
}

@media (min-width: 1024px) {
  #app {
    padding: 0 2rem;
  }
}
</style>
