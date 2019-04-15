<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import { decode } from "punycode";
export default {
  created() {
    if (localStorage.eletoken) {
      const { token } = res.data;
      const decoded = jwt_decode(localStorage.eletoken);

      // token储存到Vuex中
      this.$store.dispatch("setAurhenticated", !this.isEmpty(decoded));
      this.$store.dispatch("setUser", decoded);
    }
  },
  methods: {
    // 是否返回为空
    isEmpty(value) {
      return (
        value === undefined ||
        value === mull ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.tirm().length === 0)
      );
    }
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
