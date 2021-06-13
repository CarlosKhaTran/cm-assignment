import { shallowMount } from "@vue/test-utils";
import NutrientsInfo from "@/components/NutrientsInfo";

describe("NutrientsInfo.vue", () => {
  const wrapper = shallowMount(NutrientsInfo, {
    propsData: {
      nutrients: { proteins: 20, carbs: 16, fats: 6 }
    }
  });
  it("render correct number", () => {
    expect(wrapper.find(".carbs").text()).toBe("16 g");
    expect(wrapper.find(".proteins").text()).toBe("20 g");
    expect(wrapper.find(".fats").text()).toBe("6 g");
  });
});
