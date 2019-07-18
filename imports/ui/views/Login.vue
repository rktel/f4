<template>
    <section class="flex-container-login">
        <form class="pure-form">
            <fieldset>
                <legend>F4.0</legend>

                <input type="text" placeholder="Usuario" v-model="username" />
                <input type="password" placeholder="Contraseña" v-model="password" />

                <button class="button-small pure-button" @click.stop.prevent="login">Entrar</button>
            </fieldset>
        </form>
    </section>
</template>

<script>
import { LOCAL_STORAGE_USERNAME } from '../../api/constants';

export default {
    name:'Login',
    data() {
        return {
            username: null,
            password: null
        };
    },
    methods: {
        login() {
            const { username, password } = this;
            if (username && password) {
                Meteor.call("login", username, password, (error, user) => {
                    if (!error && user) {
                        localStorage.setItem(LOCAL_STORAGE_USERNAME, user.username);
                        this.$router.push({ name: "F4" });
                    }
                });
            }
        }
    }
};
</script>


