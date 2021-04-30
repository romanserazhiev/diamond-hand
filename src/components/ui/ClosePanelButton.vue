<template>
  <button class="fixed right-4 top-4 lg:right-5 lg:top-5">
    <div :style="closeBtnImg"></div>
  </button>
</template>

<script>
export default {
  computed: {
    closeBtnImg() {
      return {
        backgroundImage: `url(${require('../../../assets/images/close.svg')})`,
      };
    },
  },
};
</script>

<style scoped>
div {
  background-size: contain;
  cursor: pointer;
  transition: opacity 0.1ms ease;
  height: 35px;
  width: 35px;
}
</style>
