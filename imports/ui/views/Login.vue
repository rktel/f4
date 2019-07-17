<template>
    <section class="flex-container-login">
        <form class="pure-form">
            <fieldset>
                <legend>F4.0</legend>

                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <button class="button-small pure-button" @click.stop.prevent="onClickLogin">Entrar</button>
            </fieldset>
        </form>
    </section>
</template>

<script>
export default {
    methods: {
        onClickLogin() {
            alert("Button pressed");
        }
    }
};
</script>

<style>
</style>
