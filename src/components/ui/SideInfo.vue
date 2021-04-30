<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="fixed inset-0 h-screen bg-black bg-opacity-25 z-10"></div>
    <transition name="dialog">
      <dialog class="fixed h-full shadow-2xl pb-10 p-0 z-20 top-0 border-none overflow-auto bg-white sm:left-0 md:left-2/4" open v-if="show">
        <slot name="actions">
          <close-panel-button @click="tryClose">Close</close-panel-button>
        </slot>
        <header class="pl-10 pr-12 pt-7 pb-6 text-4xl lg:text-5xl lg:p-20">
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ['show', 'title'],
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
  }
};
</script>

<style scoped>
.dialog-enter-from,
.dialog-leave-to {
  transform: translateX(100%);
}

.dialog-enter-active {
  transition: all 0.4s ease-out;
}

.dialog-leave-active {
  transition: all 0.4s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: translate(0,0);
}

</style>
