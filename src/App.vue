<template>
<div id="app" class="fl" v-if="allItems.length > 0 || isError">
  <Header />
  <router-view />
</div>
</template>

<style>
@import "./assets/css/index.css";
</style>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

import {
  mapActions,
  mapGetters
} from "vuex";

export default {
  name: "App",
  methods: mapActions(["fetchItems"]),
  async mounted() {
    this.fetchItems();
  },
  components: {
    Header,
  },
  computed: mapGetters(["allItems", "isError"]),
};
</script>
