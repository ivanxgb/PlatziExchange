<template>
  <div>
    <px-assets-table :assets="assets"></px-assets-table>
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
    };
  },

  async created() {
    this.assets = await API.getAssets();
    //API.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
