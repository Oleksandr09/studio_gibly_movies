<template>
    <ul>
        <li v-for="item in people" v-bind:key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'People',
    computed: {
        people() {
            return this.$store.state.people;
        }
    }
}
</script>