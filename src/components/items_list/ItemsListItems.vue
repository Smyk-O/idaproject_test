<template>
<div class="items_wrap fl" v-if="allItems.length > 0">
  <router-link class="items_list__item fl" v-for="item in allItems" v-bind:key="item.id" v-bind:to="'/lot/' + item.name + '/'">
    <div class="item_img">
      <img :src="item.preview" alt="" loading="lazy" />
    </div>
    <div class="item_inform">
      <h2 class="item_name">{{ item.name }}</h2>
      <p class="item_description">
        {{ item.description }}
      </p>
      <div class="item_rent_price">
        {{ item.rent.toLocaleString("ru-RU") }} $/h
      </div>
    </div>
  </router-link>
</div>
</template>

<style>
/* Items list - item */

.items_wrap {
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: -32px;
}

.items_list__item {
  max-width: 26vw;
  min-width: 24vw;
  width: 100%;
  min-height: 164px;
  border-radius: 32px;
  background: #fcfcfc;
  padding: 24px 32px;
  box-sizing: border-box;
  align-items: flex-start;
  margin-bottom: 32px;
  text-decoration: none;
}

.items_list__item .item_img {
  border-radius: 24px;
  overflow: hidden;
  min-width: 88px;
  max-width: 88px;
  height: 88px;
  background: gray;
  margin: 1px 24px 0 0;
}

.items_list__item .item_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.items_list__item .item_inform {
  max-width: 188px;
}

.items_list__item .item_name {
  font-weight: bold;
  font-size: 1.112vw;
  margin: 17px 0 13px;
  color: #012345;
}

.items_list__item .item_description {
  font-size: 0.833vw;
  line-height: 148%;
  color: #677b8f;
  margin-bottom: 17px;
}

.items_list__item .item_rent_price {
  font-weight: bold;
  font-size: 0.98vw;
  line-height: 148%;
  color: #f84ab3;
}

@media screen and (max-width: 1264px) {
  .items_list__item {
    max-width: 48%;
    min-width: 32vw;
  }

  .items_list__item .item_name {
    font-size: 1.6vw;
  }

  .items_list__item .item_description {
    font-size: 1.2vw;
  }

  .items_list__item .item_rent_price {
    font-size: 1.4vw;
  }
}

@media screen and (max-width: 790px) {
  .items_wrap {
    justify-content: center;
  }

  .items_list__item {
    max-width: 343px;
    min-width: auto;
    min-height: 151px;
    margin-bottom: 12px;
    border-radius: 24px;
  }

  .items_list__item .item_img {
    border-radius: 16px;
    margin: 0 20px 0 0;
  }

  .items_list__item .item_name {
    font-size: 16px;
    font-size: 16px;
    margin: 12px 0 0px;
  }

  .items_list__item .item_description {
    font-size: 12px;
    line-height: 150%;
  }

  .items_list__item .item_rent_price {
    font-size: 14px;
  }
}

@media screen and (max-width: 640px) {
  .items_list__item {
    padding: 20px;
  }
}
</style>

<script>
import {
  mapGetters,
} from "vuex";

export default {
  name: "ItemsListItems",
  computed: mapGetters(["allItems"]),
};
</script>
