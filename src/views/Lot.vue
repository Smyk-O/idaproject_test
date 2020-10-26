<template>
  <lotBody v-if="allItems.length > 0"/>
  <main v-else-if="isError" class="item_list">
    <Error />
  </main>
  <main v-else class="item_list"></main>
</template>

<style>
h2 {
  margin-bottom: 31px;
}

.lot {
  align-items: flex-start;
}

.lot_img {
  max-width: 800px;
  max-height: 800px;
  width: 49.445vw;
  height: 48.612vw;
  border-radius: 24px;
  overflow: hidden;
}

.lot_img img {
  max-width: 49.445vw;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lot_data {
  padding: 36px 0 0 65px;
  flex: 1;
}

.lot_title {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 0.2px;
}

.lot_nav_btn {
  font-weight: bold;
  margin-right: 33px;
  color: #677b8f;
}

.lot_nav_btn.router-link-active {
  color: #4959ff;
}

.lot_rent {
  justify-content: space-between;
  padding: 16px 30px 16px 33px;
  background: #f3f4f7;
  border-radius: 16px;
  font-weight: bold;
  font-size: 20px;
}

.price {
  color: #f71d9f;
}

.lot_text {
  font-size: 14px;
  line-height: 146%;
}

.lot__description {
  color: #677b8f;
  margin: 31px 0px 32px;
  letter-spacing: -0.01px;
  white-space: pre-wrap;
}

@media screen and (max-width: 1024px) {
  .lot {
    flex-direction: column;
    align-items: center;
  }

  .lot_data {
    padding: 36px 0 0;
  }
}

@media screen and (max-width: 640px) {
  h2 {
    font-size: 20px;
  }

  .lot {
    padding: 0 16px 0;
    box-sizing: border-box;
  }

  .lot_img {
    width: calc(100vw - 32px);
    height: calc(100vw - 43px);
    border-radius: 16px;
  }

  .lot_img img {
    max-width: 100vw;
  }

  .lot_data {
    padding: 0;
  }

  .lot_title {
    font-size: 24px;
    line-height: 178%;
    margin-bottom: 9px;
  }

  .lot_nav {
    white-space: nowrap;
  }

  .lot_nav_btn {
    margin-right: 21px;
  }

  .lot_nav_btn.router-link-active {
    color: #4959ff;
  }

  .lot_rent {
    padding: 12px 24px;
    font-size: 16px;
    position: fixed;
    bottom: 32px;
    width: calc(100% - 32px);
    box-sizing: border-box;
    z-index: 1;
  }

  .lot_data::after {
    content: "";
    z-index: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: linear-gradient(
      180deg,
      rgba(252, 252, 252, 0) 0,
      #fcfcfc 100px
    );
    height: 160px;
  }

  .lot_rent .btn {
    padding: 0 0 0;
    width: 111px;
    height: 44px;
    position: static;
  }

  .lot_text {
    line-height: 146%;
  }

  .lot__description {
    margin: 20px 0px 24px;
  }
}
</style>

<script>
import Error from "@/components/Error.vue";
import lotBody from "@/components/lot/lotBody.vue";

import {
  mapGetters
} from "vuex";

export default {
  name: "lot",
  components: {
    Error,
    lotBody,
  },
  computed: mapGetters(["allItems", "isError"]),
};
</script>
