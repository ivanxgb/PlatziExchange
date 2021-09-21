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

  created() {
    API.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
