<template>
<div :class="$style.error" class="fl">
  <h1 :class="$style.error_header">An error has occurred</h1>
  <p :class="$style.error_description">Please refresh the page</p>
  <button :class="$style.error_reload" class="btn" v-on:click="fetchItems()">
    Reload page
  </button>
</div>
</template>

<style module>
.error {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.error_header {
  font-weight: bold;
  font-size: 40px;
  line-height: 100%;
  position: relative;
  top: -22px;
}

.error_description {
  font-size: 14px;
  color: #677b8f;
  position: relative;
  top: -30px;
}

@media screen and (max-width: 640px) {
  .error_header {
    font-size: 24px;
    margin-top: 118px;
  }
}
</style>

<script>
import {
  mapActions
} from "vuex";

export default {
  name: "ItemsListError",
  methods: mapActions(["fetchItems"]),
};
</script>
