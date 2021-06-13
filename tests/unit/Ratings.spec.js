import { shallowMount } from "@vue/test-utils";
import Ratings from "@/components/Ratings";

describe("PremiumRecipeCard.vue", () => {
  const wrapper = shallowMount(Ratings, {
    propsData: {
      rating: { count: 200, score: 3.5 },
      showCount: true
    }
  });
  it("render correct rating count", () => {
    expect(wrapper.find(".rating-count").text()).toBe("200 ratings");
  });
  const wrapperWithHidingCountProps = shallowMount(Ratings, {
    propsData: {
      rating: { count: 200, score: 3.5 },
      showCount: false
    }
  });
  it("render correct rating count", () => {
    expect(wrapperWithHidingCountProps.contains(".rating-count")).toBe(false);
  });
  it("render correct rating stars", () => {
    expect(wrapper.findAll(".full-star").length).toEqual(3);
    expect(wrapper.findAll(".half-star").length).toEqual(1);
    expect(wrapper.findAll(".empty-star").length).toEqual(1);
  });
});
