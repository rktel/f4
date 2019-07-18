<template>
    <section>
        <h1>F4</h1>
        <button class="button-small pure-button" @click="logout">Logout</button>
    </section>
</template>

<script>
import { LOCAL_STORAGE_USERNAME } from '../../api/constants';

export default {
    name:'F4',
    methods: {
        logout() {
            localStorage.setItem(LOCAL_STORAGE_USERNAME, 0);
            this.$router.push({ name: "Login" });
        }
    }
};
</script>

<style>
</style>
