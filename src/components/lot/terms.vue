<template>
<div :class="$style.lot_option_select">
  <p class="lot__description lot_text">{{ selectedItem.term_text }}</p>
  <div :class="$style.lot_terms">
    <h2>Additional conditions:</h2>
    <ul :class="$style.lot_rent__terms" class="lot_text">
      <li v-for="condition in conditions" :key="condition.id" :class="$style.term">
        {{ condition.text }}
      </li>
    </ul>
  </div>
</div>
</template>

<style module>
.lot_terms h2 {
  font-size: 16px;
  margin: -3px 0 30px;
  letter-spacing: 0.1px;
}

.lot_rent__terms {
  list-style: none;
  padding: 0 0 50px 25px;
  color: #677B8F;
}

.term {
  margin-bottom: 15px;
  position: relative;
}

.term::before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  background: #f84ab3;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: -24px;
}

@media screen and (max-width: 640px) {
  .lot_terms {
    padding: 0 0 32px;
  }

  .lot_terms h2 {
    margin: -3px 0 20px;
  }

  .lot_rent__terms {
    padding: 0 0 27px 17px;
  }

  .term {
    margin-bottom: 8px;
  }

  .term::before {
    top: 9px;
    left: -16px;
  }
}
</style>

<script>
import {
  mapGetters
} from "vuex";

export default {
  name: "Terms",
  computed: mapGetters(["selectedItem"]),
  data: () => {
    return {
      conditions: [{
          id: 1,
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          id: 2,
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
        },
        {
          id: 3,
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        },
      ],
    };
  },
};
</script>
