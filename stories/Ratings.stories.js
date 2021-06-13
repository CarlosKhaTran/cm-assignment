import { action } from "@storybook/addon-actions";
import { boolean, object, withKnobs } from "@storybook/addon-knobs";
import Ratings from "../src/components/Ratings";

export default {
  title: "Ratings",
  component: Ratings,
  decorators: [withKnobs]
};

export const Default = () => ({
  props: {
    rating: {
      default: object("rating", { count: 200, score: 4.5 })
    },
    showCount: { default: boolean("showCount", true) }
  },
  components: { Ratings },
  template: '<Ratings  :rating="rating" :showCount="showCount" />',
  methods: { action: action("clicked") }
});
