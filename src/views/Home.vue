<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#63B3ED'"
      :size="100"
    ></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import API from "@/api";

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
      isLoading: true,
    };
  },

  async created() {
    console.log(this.isLoading);
    await API.getAssets()
      .then((coins) => (this.assets = coins))
      .finally((this.isLoading = false));
    console.log(this.isLoading);
  },
};
</script>
