    
<template>
    <router-view></router-view>
</template>

<script>
import { LOCAL_STORAGE_USERNAME } from '../api/constants';

export default {
    name:'App',
    beforeCreate() {
        Meteor.call("checkUsername", localStorage.getItem(LOCAL_STORAGE_USERNAME), (error, result) => {
                if (!error) {
                  if(!result){
                    this.$router.push({ name: "Login" })
                  }else{
                    this.$router.push({ name: "F4" });
                  }
                }
            }
        );
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
