<template>
  <header>
    <nav id="diamond-hand-nav">
      <ul class="flex justify-center py-8 font-bold">
        <li class="text-xl md:text-3xl 2xl:px-8 xl:px-6 lg:px-5 md:px-4 sm:px-3 px-2">
          <router-link to="/">Фильм</router-link>
        </li>
        <li class="text-xl md:text-3xl 2xl:px-8 xl:px-6 lg:px-5 md:px-4 sm:px-3 px-2">
          <router-link to="/actors">Актёры</router-link>
        </li>
        <li class="text-xl md:text-3xl 2xl:px-8 xl:px-6 lg:px-5 md:px-4 sm:px-3 px-2">
          <router-link to="/cinemas">Где посмотреть</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        // headerHidden: false,
        // showFullHeader: true,
        // idToScroll: 'diamond-hand-nav',
        // enlargedItem: false,
      }
    },
    methods: {
      // hovered() {
      //   this.enlargedItem = true;
      // },
      // scrollWithDelay() {
      //   const elementToScroll = document.getElementById(this.idToScroll);
      //   // const navigationHeight = 
      //   let amountOfPixelsToScroll = 0;
        
      //   let scrolledFromTop = window.pageYOffset;
      //   if (scrolledFromTop > 0 && scrolledFromTop < 70) {
      //     this.headerHidden = false;
      //     amountOfPixelsToScroll = scrolledFromTop/2;
      //     elementToScroll.style.transform = 'translateY(' + amountOfPixelsToScroll + 'px)';
      //   } 
      //   if (scrolledFromTop > 70) {
      //     this.headerHidden = true;
      //   }
      // },
    },
    created() {
      
    },
    mounted() {
      // window.addEventListener('scroll', this.scrollWithDelay);
    },
    unmounted() {
      // window.removeEventListener('scroll', this.scrollWithDelay);
    },
  }
</script>

<style>
.router-link-active {
  color: blue;
}
</style>