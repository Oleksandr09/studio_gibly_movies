<template>
    <ul>
        <li v-for="item in locations" v-bind:key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Locations',
    computed: {
        locations() {
            return this.$store.state.locations;
        }
    }
}
</script>