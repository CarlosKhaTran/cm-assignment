<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>
      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard
          v-bind:data="data"
          energy-units="calories"
          v-bind:energy="energy"
          :liked="false"
          :isRecipeOfDay="true"
          @click="action"
        />
        <div class="gutter" />
        <PremiumRecipeCard
          v-bind:data="data"
          energy-units="calories"
          v-bind:energy="energy"
          :liked="true"
          @click="action"
          :isRecipeOfDay="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
import getPremiumRecipeCardData from "./api";
import { kiloJoulesToCalories } from "./utils";

export default {
  name: "App",
  data() {
    return {
      data: {}
    };
  },
  components: {
    PremiumRecipeCard
  },
  async beforeMount() {
    const data = await getPremiumRecipeCardData();
    this.data = data;
  },
  computed: {
    energy() {
      const unit = this.data?.units?.energy;
      const energy = this.data?.energy;
      if (unit === "kJ") {
        return kiloJoulesToCalories(energy);
      }
      return energy;
    }
  },
  methods: {
    action: function() {
      alert("Card is clicked");
    }
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

/** Remove these styles when done */
.premium-recipe-wrapper {
  margin-top: 100px;
  border: 2px dashed red;
  padding: 16px;
}
.gutter {
  height: 30px;
}
</style>
