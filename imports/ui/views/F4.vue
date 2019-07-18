<template>
    <section class="area-f4">
        <nav>
            <button class="button-xsmall pure-button" disabled>F4</button>
            <button class="button-xsmall pure-button" @click="logout">Logout</button>
        </nav>

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

<style scope>
.area-f4{
    height: 100%;
}
.area-f4 nav{
    height: 25px;
    border-left:2px cornflowerblue;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.content-f4 {
  /* Subtract the header size */
  height: calc(100% - 25px);
  overflow: auto;
}
</style>
