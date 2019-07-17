<template>
    <section class="flex-container-login">
        <form class="pure-form">
            <fieldset>
                <legend>Figo</legend>

                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <button type="submit" class="button-small pure-button">Entrar</button>
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
