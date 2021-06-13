<template>
  <div id="nutrients" class="nutrients-wrapper">
    <div class="dot red" />
    <div class="nutrient carbs">{{ nutrients.carbs }} g</div>
    <div class="dot blue" />
    <div class="nutrient proteins">{{ nutrients.proteins }} g</div>
    <div class="dot orange" />
    <div class="nutrient fats">{{ nutrients.fats }} g</div>
  </div>
</template>

<script>
export default {
  props: ["nutrients"],
  name: "nutrients"
};
</script>

<style scoped>
.nutrients-wrapper {
  display: flex;
  align-items: center;
}
.nutrient {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;

  color: #6f737a;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-right: 4px;
}
.red {
  background: #f94642;
}
.blue {
  background: #3177bb;
}
.orange {
  background: #fda120;
}
</style>
