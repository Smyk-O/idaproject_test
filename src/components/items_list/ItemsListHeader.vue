<template>
<div class="item_list_header fl">
  <div class="item_list_header__rent select_non">
    Rent
    <span>
      {{ selectFilterOption }}
      <SVGArrow class="arrow_ico" />
      <select @change="selectSearchOption($event.target.value)">
        <option v-for="option in filterOptions" v-bind:key="option" v-bind:value="option">
          {{ option }}
        </option>
      </select>
    </span>
  </div>
  <div class="item_list_header__add_new">
    <button>
      Add new
      <SVGPlus class="plus_ico" />
    </button>
  </div>
</div>
</template>

<style>

/* Items list - header */

.item_list_header {
  margin-bottom: 38px;
  justify-content: space-between;
  white-space: nowrap;
}

.item_list_header__rent {
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #012345;
}

.item_list_header__rent span {
  display: inline-block;
  box-sizing: border-box;
  border: 0px solid transparent;
  background: 0;
  color: #4959ff;
  position: relative;
  padding-right: 10px;
}

.arrow_ico {
  position: relative;
  top: -0.4vw;
  left: 0.79vw;
  width: 12px;
  height: 8px;
}

.item_list_header__rent select {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.item_list_header__add_new button {
  font-size: 20px;
  font-weight: bold;
  color: #4959ff;
  display: flex;
  align-items: center;
  padding: 0;
}

.plus_ico {
  margin-left: 1.45vw;
  width: 48px;
  height: 48px;
}

@media screen and (max-width: 640px) {
  .item_list_header {
    margin-bottom: 24px;
  }

  .item_list_header__rent {
    font-size: 24px;
    line-height: 28px;
  }

  .arrow_ico {
    width: 8px;
    height: 5.3px;
    top: -3px;
    left: 4px;
  }

  .item_list_header__add_new button {
    font-size: 16px;
  }

  .plus_ico {
    width: 32px;
    height: 32px;
    margin-left: 14px;
    position: relative;
    left: -2px;
  }
}
</style>

<script>
import SVGPlus from "@/assets/img/plus.svg";
import SVGArrow from "@/assets/img/arrow.svg";
import {
  mapGetters,
  mapActions
} from "vuex";

export default {
  name: "ItemsListHeader",
  computed: mapGetters(["filterOptions", "selectFilterOption"]),
  methods: mapActions(["selectSearchOption"]),
  components: {
    SVGPlus,
    SVGArrow,
  },
};
</script>
