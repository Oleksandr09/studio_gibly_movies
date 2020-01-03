<template>
    <ul>
        <li v-for="item in vehicles" v-bind:key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Vehicles',
    computed: {
        vehicles() {
            return this.$store.state.vehicles;
        }
    }
}
</script>