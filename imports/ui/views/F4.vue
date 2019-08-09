<template>
  <section class="area-f4">
    <nav>
      <button class="button-xsmall pure-button" disabled>F4</button>
      <button class="button-xsmall pure-button" @click="logout">Logout</button>
    </nav>
    <section class="content-f4">
      <div class="item1">ONE</div>
      <div class="item2">TWO</div>
    </section>
  </section>
</template>

<script>
import { LOCAL_STORAGE_USERNAME } from "../../api/constants";

export default {
  name: "F4",
  created() {
 /*
    import Response from "meteor-node-stubs/node_modules/http-browserify/lib/response";
    if (!Response.prototype.setEncoding) {
      Response.prototype.setEncoding = function(encoding) {
        // do nothing
      };
    }
*/
    // Socket io client
    const PORT = 8080;
    let socket = require("socket.io-client")(`http://10.12.1.80:${PORT}`);

    socket.on("connect", function() {
      console.log("Client connected");
    });
    socket.on("disconnect", function() {
      console.log("Client disconnected");
    });
  },
  methods: {
    logout() {
      localStorage.setItem(LOCAL_STORAGE_USERNAME, 0);
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scope>
.area-f4 {
  height: 100%;
}
.area-f4 nav {
  height: 25px;
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
  display: flex;
  flex-direction: row;
  align-content: stretch;
}
.content-f4 div.item1 {
  flex: 3 1;
  order: 0;
  align-self: stretch;
}
.content-f4 div.item2 {
  flex: 7 1;
  order: 0;
  align-self: stretch;
  background-color: gainsboro;
}
@media only screen and (max-width: 900px) {
  .content-f4 {
    flex-direction: column;
  }
  .content-f4 div.item1 {
    flex: 1 1 auto;
  }
  .content-f4 div.item2 {
    flex: 1 1 auto;
  }
}
</style>
