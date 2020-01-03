<template>
  <div id="app">
    <nav-menu />
    <movies />
    <locations />
    <people />
    <species />
    <vehicles />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import Movies from './components/Movies.vue'
import Locations from './components/Locations.vue'
import People from './components/People.vue'
import Species from './components/Species.vue'
import Vehicles from './components/Vehicles.vue'

export default {
  name: 'app',
  components: {
    NavMenu,
    Movies,
    Locations,
    People,
    Species,
    Vehicles
  },
  data() {
    return {
    
    }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
