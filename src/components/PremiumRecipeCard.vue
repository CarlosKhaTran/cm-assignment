<template>
  <div id="premium-card">Premium Recipe Card Component Goes {{ title }}</div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      title: this.data?.title
    };
  },
  name: "premium-card",
  created: function() {
    console.log("user data from parent component:");
  },
  updated() {}
};
</script>
