<template>
    <nav>
        <button @click="showMovies">Show Movies</button>
        <button @click="showLocations">Show Locations</button>
        <button @click="showPeople">Show People</button>
        <button @click="showSpecies">Show Species</button>
        <button @click="showVehicles">Show Vehicles</button>
    </nav>
</template>

<script>


export default {
    methods: {
        showMovies() {
            this.$store.dispatch('getMovies')
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