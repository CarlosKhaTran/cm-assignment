<template>
  <div id="nutrigents" class="nutrients-wrapper">
    <div class="dot red" />
    <div class="nutrigent">{{ nutrients.carbs }} g</div>
    <div class="dot blue" />
    <div class="nutrigent">{{ nutrients.proteins }} g</div>
    <div class="dot orange" />
    <div class="nutrigent">{{ nutrients.fats }} g</div>
  </div>
</template>

<script>
export default {
  props: ["nutrients"],
  name: "nutrigents"
};
</script>

<style scoped>
.nutrients-wrapper {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
}
.nutrigent {
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
