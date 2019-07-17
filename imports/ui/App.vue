    
<template>
  <router-view></router-view>
</template>

<script>
export default {
  beforeCreate() {
    Meteor.userId()
      ? this.$router.push({ name: "F4" })
      : this.$router.push({ name: "Login" });
  }
};
</script>

<style scope>
.button-xsmall {
  font-size: 70%;
}

.button-small {
  font-size: 85%;
}
</style>
