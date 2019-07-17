    
<template>
    <router-view></router-view>
</template>

<script>
export default {
    beforeCreate() {
        0
            ? this.$router.push({ name: "F4" })
            : this.$router.push({ name: "Login" });
    }
};
</script>

<style scope>
html,
body {
    height: 100vh !important;
}

.flex-container-login {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
}

.button-xsmall {
    font-size: 70%;
}

.button-small {
    font-size: 85%;
}
</style>
