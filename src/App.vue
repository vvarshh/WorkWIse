<template>
    <TeamPage/>
</template>

<router-view/>
<script>
import TeamPage from './components/TeamPage.vue'

export default {
  name: 'App',
  components: {
    TeamPage
  }
}
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
