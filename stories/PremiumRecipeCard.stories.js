import { action } from "@storybook/addon-actions";
import {
  object,
  withKnobs,
  text,
  number,
  boolean
} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  props: {
    data: {
      default: object("data", {
        title:
          "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
        image:
          "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh",
        rating: { count: 200, score: 4.5 },
        units: { proteins: "g", carbs: "g", fats: "g", energy: "kJ" },
        nutrients: { proteins: 20, carbs: 16, fats: 6 },
        preparationTimeMinutes: 75
      })
    },
    ["energy-units"]: { default: text("energy-units", "calories") },
    energy: { default: number("energy", 23) },
    liked: { default: boolean("liked", false) },
    isRecipeOfDay: { default: boolean("isRecipeOfDay", false) }
  },
  components: { PremiumRecipeCard },
  template:
    '<PremiumRecipeCard @click="action" v-bind:data="data" :energy-units="calories" :energy="energy" :liked="liked" :isRecipeOfDay="isRecipeOfDay" />',
  methods: { action: action("clicked") }
});
