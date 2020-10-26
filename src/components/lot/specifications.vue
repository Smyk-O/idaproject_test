<template>
  <div :class="$style.lot_option_select">
    <p class="lot__description lot_text">
      {{ selectedItem.specifications_text }}
    </p>
    <div :class="$style.lot_spec__features">
      <h2>Features:</h2>
      <div
        :class="$style.feature"
        class="fl"
        v-for="feature in features"
        :key="feature.id"
      >
        <div :class="$style.lot_ico" class="fl" v-html="feature.ico"></div>
        <div :class="$style.feature_description">
          <h3 :class="$style.feature_title">{{ feature.title }}</h3>
          <p :class="$style.feature_text" class="lot_text">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.lot_option_select {
  margin-bottom: 41px;
}

.lot_spec__features h2 {
  margin-bottom: 31px;
}

.feature {
  margin-bottom: 17px;
  align-items: stretch;
}

.lot_ico {
  max-width: 80px;
  width: 100%;
  height: 96px;
  background: #f3f4f7;
  border-radius: 16px;
  justify-content: center;
  margin-right: 24px;
}

.feature_title {
  font-weight: bold;
  font-size: 16px;
  line-height: 152%;
  margin: 12px 0 -7px;
}

@media screen and (max-width: 640px) {
  .lot_option_select {
    margin-bottom: 26px;
    padding: 0 0 73px;
  }

  .lot_spec__features h2 {
    margin-bottom: 27px;
  }

  .feature {
    margin-bottom: 7px;
  }

  .lot_ico {
    border-radius: 16px;
    max-width: 64px;
    height: 80px;
    margin-right: 16px;
  }

  .lot_ico > * {
    width: 22px;
    height: 18px;
  }

  .feature_title {
    font-size: 16px;
    margin: 3px 0 0px;
  }

  .feature .feature_text {
    margin: 5px 0;
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Specifications",
  computed: mapGetters(["selectedItem"]),
  data: () => {
    return {
      features: [
        {
          id: 1,
          title: "A challenge for a true champion",
          desc:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          ico:
            '<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 18.584V21.3333H23V24H7V21.3333H13.6667V18.584C11.0889 18.2589 8.71842 17.0044 7 15.0557C5.28158 13.107 4.33338 10.5981 4.33333 8V0H25.6667V8C25.6666 10.5981 24.7184 13.107 23 15.0557C21.2816 17.0044 18.9111 18.2589 16.3333 18.584ZM0.333332 2.66667H3V8H0.333332V2.66667ZM27 2.66667H29.6667V8H27V2.66667Z" fill="#677B8F"/></svg>',
        },
        {
          id: 2,
          title: "Pilot's sweaty hands",
          desc:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
          ico:
            '<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9413 18.752C18.4867 20.1627 21.096 23.4187 21.584 27.3333H0.416004C0.904004 23.4187 3.51334 20.1627 7.05867 18.752L11 24.6667L14.9413 18.752ZM19 0.666656V8.66666C19 13.0853 15.4187 16.6667 11 16.6667C6.58134 16.6667 3 13.0853 3 8.66666V0.666656H19ZM16.3333 8.66666H5.66667C5.66667 11.6133 8.05334 14 11 14C13.9467 14 16.3333 11.6133 16.3333 8.66666Z" fill="#677B8F"/></svg>',
        },
      ],
    };
  },
};
</script>
