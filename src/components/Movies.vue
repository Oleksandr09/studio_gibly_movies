<template>
    <ul>
        <li v-for="item in movies" v-bind:key="item.id">
            {{ item.title }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Movies',
    computed: {
        movies() {
            return this.$store.state.movies;
        }
    }
}
</script>