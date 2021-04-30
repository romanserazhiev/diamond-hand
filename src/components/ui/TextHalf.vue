<template>
  <div class="mx-8 p-6 bg-gradient-to-r from-gray-50 rounded-2xl 2xl:rounded-2xl 2xl:rounded-none lg:p-16 md:m-0 md:p-12 md:rounded-none to-gray-100 xl:p-28">
    <p class="text-3xl 2xl:text-6xl xl:text-5xl md:text-4xl"
      v-html="`${text}`">
    </p>
  </div>
</template>

<script>
  export default {
    props: [
      'text',
    ],
  }
</script>