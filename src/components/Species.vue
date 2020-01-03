<template>
    <ul>
        <li v-for="item in species" v-bind:key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Species',
    computed: {
        species() {
            return this.$store.state.species;
        }
    }
}
</script>