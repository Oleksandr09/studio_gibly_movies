import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: [],
        locations: [],
        people: [],
        species: [],
        vehicles: [],
        moviesApi: 'https://ghibliapi.herokuapp.com/films',
        locationsApi: 'https://ghibliapi.herokuapp.com/locations',
        peopleApi: 'https://ghibliapi.herokuapp.com/people',
        speciesApi: 'https://ghibliapi.herokuapp.com/species',
        vehiclesApi: 'https://ghibliapi.herokuapp.com/vehicles'
    },
    mutations: {
        setMovies(state, payload) {
            state.movies = payload;
        },
        setLocations(state, payload) {
            state.locations = payload;
        },
        setPeople(state, payload) {
            state.people = payload;
        },
        setSpecies(state, payload) {
            state.species = payload;
        },
        setVehicles(state, payload) {
            state.vehicles = payload;
        }
    },
    actions: {
        async getMovies({ state, commit }) {
            try {
                let res = await axios.get(`${state.moviesApi}`);
                commit('setMovies', res.data);
            } catch (error) {
                commit('setMovies', [])
            }
        },
        async getLocations({ state, commit }) {
            try {
                let res = await axios.get(`${state.locationsApi}`);
                commit('setLocations', res.data);
            } catch (error) {
                commit('setLocations', [])
            }
        },
        async getPeople({ state, commit }) {
            try {
                let res = await axios.get(`${state.peopleApi}`);
                commit('setPeople', res.data);
            } catch (error) {
                commit('setPeople', [])
            }
        },
        async getSpecies({ state, commit }) {
            try {
                let res = await axios.get(`${state.speciesApi}`);
                commit('setSpecies', res.data);
            } catch (error) {
                commit('setSpecies', [])
            }
        },
        async getVehicles({ state, commit }) {
            try {
                let res = await axios.get(`${state.vehiclesApi}`);
                commit('setVehicles', res.data);
            } catch (error) {
                commit('setVehicles', [])
            }
        }
    },
    modules: {}
})