<template>
    <section class="flex-container-login">
        <form class="pure-form">
            <fieldset>
                <legend>F4.0</legend>

                <input type="text" placeholder="Usuario" v-model="username"/>
                <input type="password" placeholder="Contraseña" v-model="password" />

                <button class="button-small pure-button" @click.stop.prevent="onClickLogin">Entrar</button>
            </fieldset>
        </form>
    </section>
</template>

<script>
export default {
    data(){
        return{
            username:null,
            password:null
        }
    },
    methods: {
        onClickLogin() {
            const {username, password} = this
            if(username && password){
                const user = Meteor.call('login', username, password);
                console.log(user);
            }
        }
    }
};
</script>

<style>
</style>
