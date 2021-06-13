import { object, withKnobs } from "@storybook/addon-knobs";
import NutrientsInfo from "../src/components/NutrientsInfo";

export default {
  title: "NutrientsInfo",
  component: NutrientsInfo,
  decorators: [withKnobs]
};

export const Default = () => ({
  props: {
    nutrients: {
      default: object("nutrients", { proteins: 20, carbs: 16, fats: 6 })
    }
  },
  components: { NutrientsInfo },
  template: '<NutrientsInfo  :nutrients="nutrients" />'
});
