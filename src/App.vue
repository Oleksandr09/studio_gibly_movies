<template>
  <div id="app">
    <button @click="showMovies">Show Movies</button>
    <button @click="showLocations">Show Locations</button>
    <button @click="showPeople">Show People</button>
    <button @click="showSpecies">Show Species</button>
    <button @click="showVehicles">Show Vehicles</button>
    <movies v-if="moviesTab" />
    <locations />
    <people />
    <species />
    <vehicles />
  </div>
</template>

<script>
import Movies from './components/Movies.vue'
import Locations from './components/Locations.vue'
import People from './components/People.vue'
import Species from './components/Species.vue'
import Vehicles from './components/Vehicles.vue'

export default {
  name: 'app',
  components: {
    Movies,
    Locations,
    People,
    Species,
    Vehicles
  },
  data() {
    return {
      moviesTab: false
    }
  },
  methods: {
    showMovies() {
      this.$store.dispatch('getMovies')
      this.moviesTab = true
    },
    showLocations() {
      this.$store.dispatch('getLocations')
    },
    showPeople() {
      this.$store.dispatch('getPeople')
    },
    showSpecies() {
      this.$store.dispatch('getSpecies')
    },
    showVehicles() {
      this.$store.dispatch('getVehicles')
    }
  }
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
