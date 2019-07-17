<template>
    <section>
        <h1>F4</h1>
        <button class="button-small pure-button" @click="logout">Logout</button>
    </section>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.setItem("user", 0);
            this.$router.push({ name: "Login" });
        }
    }
};
</script>

<style>
</style>
