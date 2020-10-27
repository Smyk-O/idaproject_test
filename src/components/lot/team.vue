<template>
<div :class="$style.lot_option_select">
  <p class="lot__description lot_text">{{ selectedItem.team_text }}</p>
  <div :class="$style.lot_team">
    <h2>Qualified specialists</h2>
    <div :class="$style.lot_team__members" class="fl">
      <div :class="$style.member" v-for="member in members" :key="member.id">
        <img :class="$style.member_phote" :src="member.photo" alt="" />
        <h3 :class="$style.member_name">
          {{ member.name }}
        </h3>
        <h4 :class="$style.mamber_profession">
          {{ member.profession }}
        </h4>
      </div>
    </div>
    <p :class="$style.lot_team__text" class="lot_text">{{ member_text }}</p>
  </div>
</div>
</template>

<style module>
.lot_team__members {
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -24px;
}

.member {
  max-width: 162px;
  width: 100%;
  margin: 0 0 4px 24px;
}

.member_phote {
  border-radius: 16px;
  margin-bottom: 4px;
}

.member_name {
  font-weight: bold;
  font-size: 16px;
  line-height: 0;
}

.mamber_profession {
  font-size: 12px;
  line-height: 148%;
  color: #677B8F;
}

.lot_team__text {
  margin-bottom: 47px;
}

@media screen and (max-width: 640px) {
  .lot_team {
    margin-bottom: -35px;
  }

  .lot_team h2 {
    margin-bottom: 28px;
  }

  .lot_team__members {
    margin-bottom: -5px;
  }

  .member {
    max-width: 343px;
    width: 100%;
    margin-bottom: 9px;
  }

  .member_phote {
    width: 132px;
    border-radius: 12px;
    float: left;
    margin-right: 16px;
  }

  .member_name {
    font-size: 16px;
    line-height: 138%;
    margin-bottom: -8px;
  }
}
</style>

<script>
import team_1 from "@/assets/img/team_1.png";
import team_2 from "@/assets/img/team_2.png";
import team_3 from "@/assets/img/team_3.png";

import {
  mapGetters
} from "vuex";

export default {
  name: "Team",
  computed: mapGetters(["selectedItem"]),
  data: () => {
    return {
      members: [{
          id: 1,
          name: "Marvin McKinney",
          profession: "Pilot assistant",
          photo: team_1,
        },
        {
          id: 2,
          name: "Savannah Nguyen",
          profession: "Mechanic",
          photo: team_2,
        },
        {
          id: 3,
          name: "Courtney Henry",
          profession: "Stewardess",
          photo: team_3,
        },
      ],
      member_text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    };
  },
};
</script>
