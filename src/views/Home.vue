<template>
<main class="item_list" v-if="allItems.length > 0">
  <ItemsListHeader />
  <ItemsListItems />
</main>
<main v-else-if="isError" class="item_list">
  <Error />
</main>
<main v-else class="item_list">
</main>
</template>

<script>
import ItemsListHeader from "@/components/items_list/ItemsListHeader.vue";
import ItemsListItems from "@/components/items_list/ItemsListItems.vue";
import Error from "@/components/Error.vue";

import {
  mapGetters
} from "vuex";

export default {
  name: "Home",

  components: {
    ItemsListHeader,
    ItemsListItems,
    Error
  },
  computed: mapGetters(["allItems", "isError"]),
};
</script>
