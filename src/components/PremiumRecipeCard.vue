<template>
  <div id="premium-card" class="premium-card" @click="$emit('click')">
    <div class="image-wrapper">
      <img v-if="image" class="reciept-image" :src="image" />
      <div class="overlay" />
      <img v-bind:src="likeIcon" class="like-icon" />
    </div>
    <div v-if="loaded" class="receipt-information-wrapper">
      <div class="receipt-tag">
        <img src="../assets/trophy.svg" class="trophy" /> Premium Recipe
      </div>
      <div class="receipt-title">
        {{ title }}
      </div>
      <Ratings v-bind:rating="this.rating" />
      <div class="more-info-wrapper">
        <img src="../assets/clock.svg" />
        <div class="detail">
          {{ this.duration }}
        </div>
        <img src="../assets/gas.svg" />
        <div class="detail">
          {{ this.energyValue }}
        </div>
        <NutrigentsInfo v-bind:nutrients="this.nutrients" />
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from "lodash";
import {
  caloriesToKiloJoules,
  formatCountValue,
  formatDuration
} from "../utils";
import Ratings from "./Ratings.vue";
import NutrigentsInfo from "./NutrigentsInfo.vue";

export default {
  props: ["data", "energy", "energy-units", "liked", "handleClick"],
  components: {
    Ratings,
    NutrigentsInfo
  },
  computed: {
    loaded() {
      return !isEmpty(this.data);
    },
    image() {
      return this.data?.image;
    },
    title() {
      return this.data?.title;
    },
    rating() {
      return this.data?.rating ?? {};
    },
    count() {
      return formatCountValue(this.data?.rating?.count, "rating", "ratings");
    },
    energyValue() {
      if (this["energy-units"] === "calories") {
        return `${this.energy}  Calories`;
      }
      return `${caloriesToKiloJoules(this.energy)} Kilojoules`;
    },
    duration() {
      return formatDuration(this.data?.preparationTimeMinutes);
    },
    nutrients() {
      return this.data?.nutrients ?? {};
    },
    likeIcon() {
      if (this.liked) {
        return require("../assets/heart.svg");
      }
      return require("../assets/heart-outline.svg");
    }
  },
  name: "premium-card",
  created: function() {
    console.log("user data from parent component:");
  },
  updated() {
    console.log(this.liked, typeof this.liked);
  },
  methods: {
    click(e) {
      this.handleClick(e);
    }
  }
};
</script>

<style scoped>
.premium-card {
  width: 343px;
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.reciept-image {
  object-fit: cover;
  height: 218px;
  width: 100%;
}
.image-wrapper {
  width: 100%;
  position: relative;
  border: none;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  opacity: 0;
}
.overlay:hover {
  opacity: 0.2;
}
.receipt-information-wrapper {
  display: flex;
  background-color: white;
  margin-top: -18px;
  z-index: 2;
  flex-direction: column;
  position: relative;
  padding-bottom: 16px;
}
.receipt-tag {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  position: absolute;
  top: -28px;
  left: 8px;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #ffffff;
}
.trophy {
  padding-right: 4px;
}
.receipt-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */
  text-align: left;
  color: #0c0c0a;
  margin: 8px 16px 16px 16px;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.more-info-wrapper {
  display: flex;
  margin-left: 16px;
  align-items: center;
}
.detail {
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 117% */
  display: flex;
  align-items: center;
  /* Gray2 */
  margin-left: 8px;
  color: #393c40;
  margin-right: 16px;
}
.like-icon {
  position: absolute;
  top: 16px;
  right: 16px;
}
</style>
