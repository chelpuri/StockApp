<template>
  <div class="text">
    <label for="region" class="text">{{ message }}</label>
    <input
      type="text"
      v-model="region"
      name="region"
      id="region"
      :placeholder="hint"
    /><br /><br />
    <label for="company">{{ stockMessage }}</label>
    <input
      type="text"
      v-model="name"
      name="company"
      id="company"
      placeholder="reliance/tesla"
    /><br /><br />
  </div>
  <div>
    <button type="button" @click="fetchData()">Go</button> <br />
    <br />
  </div>
  <div v-if="stockData.length !== 0">
    {{ stockData[0].score }}
  </div>
</template>

<script>
import financeapiService from "/src/axios/financeapi";

export default {
  props: {},

  data() {
    return {
      name: "",
      region: "",
      message: "Enter region name: ",
      hint: "IN/US",
      stockMessage: "Companies in the region: ",
      stockData: [],
      showdata: false,
    };
  },

  methods: {
    async fetchData() {
      try {
        const data = await financeapiService.get(this.region, this.name);
        this.showdata = true;
        this.stockData = data.quotes;
        console.log(this.stockData[0].score);
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
