<template>
  <button
    @click="methodClick"
    class="
      bg-transparent
      hover:bg-green-500
      text-green-700
      font-semibold
      hover:text-white
      py-2
      px-2
      border border-green-500
      hover:border-transparent
      rounded
    "
  >
    <beat-loader :loading="isLoading" :color="'#63B3ED'" :size="8" />
    <slot v-show="isLoading"></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  props: {
    isLoading: {
      typeof: Boolean,
      default: false,
    },
  },

  methods: {
    methodClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
