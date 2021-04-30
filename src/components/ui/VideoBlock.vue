<template>
  <div
    class="grid grid-flow-row auto-rows-max rounded-4xl border border-gray-900 bg-black overflow-hidden"
  >
    <div class="flex max-h-80">
      <video
        class="flex-shrink-0 min-w-full min-h-full rounded-t-4xl object-cover"
        :poster="require(`../../../assets/images/${image}`)"
        autoplay
        loop
        playsinline
      >
        <source
          :src="require(`../../../assets/videos/${video}`)"
          type="video/mp4"
        />
      </video>
    </div>
    <p
      class="bg-black font-sans text-gray-400 text-base md:text-lg xl:text-xl 2xl:text-2xl px-8 py-4 md:px-12 md:py-8"
      v-html="`${text}`"
    ></p>
  </div>
</template>

<script>
export default {
  props: ["text", "image", "video"],
};
</script>


