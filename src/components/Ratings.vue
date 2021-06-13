<template>
  <div id="ratings" class="rating-wrapper" v-bind:onClick="onClick">
    <div v-for="star in stars" :key="star.key">
      <img v-bind:src="star.src" class="star-icon" />
    </div>
    <div class="rating-count" v-if="showCount">{{ count }}</div>
  </div>
</template>

<script>
import { range } from "lodash";
import { formatCountValue } from "../utils";

export default {
  props: ["rating", "onClick", "showCount"],
  name: "ratings",
  computed: {
    stars() {
      return range(1, 6).map(el => {
        const score = this.rating?.score;
        const star = { key: el };
        switch (true) {
          case score - el >= 1:
            star.src = require("../assets/full-star.svg");
            break;
          case 0 <= score - el >= 0.5:
            star.src = require("../assets/half-star.svg");
            break;
          default:
            star.src = require("../assets/empty-star.svg");
        }
        return star;
      });
    },
    count() {
      return formatCountValue(this.rating?.count, "rating", "ratings");
    }
  }
};
</script>

<style scoped>
.rating-wrapper {
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  align-items: center;
}
.star-icon {
  height: 12px;
  width: 12px;
}
.rating-count {
  font-size: 14px;
  line-height: 14px;
  margin-left: 8px;
  color: #1ca677;
}
</style>
