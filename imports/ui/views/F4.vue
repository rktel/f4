<template>
  <section class="area-f4">
    <nav>
      <button class="button-xsmall pure-button" disabled>F4</button>
      <button class="button-xsmall pure-button" @click="logout">Logout</button>
    </nav>
    <section class="content-f4">
      <div class="item1">
        <table class="pure-table pure-table-horizontal">
          <tbody>
            <tr v-for="mobile in mobiles" :key="mobile">
              <td>
                <label>
                  <input type="checkbox" />
                  {{mobile}}
                </label>
              </td>
              <td>
                <button class="pure-button">&#9655;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="item2">TWO</div>
    </section>
  </section>
</template>

<script>
import { LOCAL_STORAGE_USERNAME } from "../../api/constants";
const PORT = 8080;
let SOCKET;

export default {
  name: "F4",
  created() {
    SOCKET = require("socket.io-client")(`http://10.12.1.80:${PORT}`);
    SOCKET.on("mobiles", mobiles => {
      console.log(mobiles);
      this.mobiles = mobiles;
    });
    SOCKET.on("connect", function() {
      console.log("Client connected");
    });
    SOCKET.on("disconnect", function() {
      console.log("Client disconnected");
    });
  },
  data() {
    return {
      mobiles: []
    };
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
  height: calc(100% - 2px);
  overflow: auto;
}
.content-f4 div.item2 {
  flex: 7 1;
  order: 0;
  align-self: stretch;
  background-color: gainsboro;
  height: calc(100% - 2px);
  overflow: auto;
}
@media only screen and (max-width: 900px) {
  .content-f4 {
    flex-direction: column;
  }
  .content-f4 div.item1 {
    flex: 1 1 auto;
    height: calc(50% - 2px);
  }
  .content-f4 div.item2 {
    flex: 1 1 auto;
    height: calc(50% - 2px);
  }
}
</style>
