import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard";

describe("PremiumRecipeCard.vue", () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      duration: 75,
      title:
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
      image:
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh",
      rating: { count: 200, score: 4.5 },
      units: { proteins: "g", carbs: "g", fats: "g", energy: "kJ" },
      nutrients: { proteins: 20, carbs: 16, fats: 6 },
      ["energy-units"]: "calories",
      energy: 25,
      liked: false,
      isRecipeOfDay: false
    }
  });
  it("render correct title", () => {
    expect(wrapper.find(".receipt-title").text()).toBe(
      "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions"
    );
  });
  it("show receipt tag", () => {
    expect(wrapper.contains(".receipt-tag")).toBe(true);
  });
  it("show outline heart icon", () => {
    expect(wrapper.contains(".heart-outline")).toBe(true);
  });
  it("show outline heart icon", () => {
    expect(wrapper.contains(".heart-outline")).toBe(true);
  });
  it("show correct energy", () => {
    expect(wrapper.find(".energy-value").text()).toBe("105 Kilojoules");
  });
});

describe("Receipt of day", () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      duration: 75,
      title:
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
      image:
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh",
      rating: { count: 200, score: 4.5 },
      units: { proteins: "g", carbs: "g", fats: "g", energy: "kJ" },
      nutrients: { proteins: 20, carbs: 16, fats: 6 },
      ["energy-units"]: "calories",
      energy: 25,
      liked: false,
      isRecipeOfDay: true
    }
  });
  it("render recipe of day title", () => {
    expect(wrapper.find(".receipt-of-day").text()).toBe("RECIPE OF THE DAY");
  });
  it("hide eceipt tag", () => {
    expect(wrapper.contains(".receipt-tag")).toBe(false);
  });
});

describe("PremiumRecipeCard.vue with outline heart icon", () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      duration: 75,
      title:
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
      image:
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh",
      rating: { count: 200, score: 4.5 },
      units: { proteins: "g", carbs: "g", fats: "g", energy: "kJ" },
      nutrients: { proteins: 20, carbs: 16, fats: 6 },
      ["energy-units"]: "calories",
      energy: 25,
      liked: true,
      isRecipeOfDay: false
    }
  });

  it("show heart icon", () => {
    expect(wrapper.contains(".heart")).toBe(true);
  });
});
