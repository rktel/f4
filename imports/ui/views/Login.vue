<template>
    <section class="flex-container-login">
  
            <form class="form-login pure-form pure-form-aligned">
                <fieldset>
                    <div class="pure-control-group">
                        <label for="name">Usuario</label>
                        <input id="name" type="text" />
                    </div>

                    <div class="pure-control-group">
                        <label for="password">Clave</label>
                        <input id="password" type="password"/>
                    </div>

                    <div class="pure-controls">
                        <button class="button-small pure-button" @click.stop.prevent="onClickLogin">Ingresar</button>
                    </div>
                </fieldset>
            </form>
 
    </section>
</template>

<script>
export default {
    methods:{
        onClickLogin(){
            alert('Button pressed');
        }
    }
};
</script>

<style>
</style>
