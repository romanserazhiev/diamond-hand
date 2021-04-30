<template>
  <div
    :id="containerId"
    :class="bgClass"
    class="rounded-2xl 2xl:rounded-2xl 2xl:rounded-none md:rounded-none"
  >
    <img
      :id="imgId"
      :class="imgClass"
      class="rounded-2xl 2xl:rounded-2xl 2xl:rounded-none md:rounded-none"
      :src="require(`../../../assets/images/${imageSource}`)"
      @click="onImageClick"
    />
    
    <side-info :show="!!infoPanelOpen" :title="imgInfoHeading" @close="closeInfoPanel">
      <p class="pl-10 pr-12 mb-10 text-2xl lg:text-3xl lg:px-20">{{ imgInfoText }}</p>
      <router-link class="text-2xl text-blue-800 border-b-2 border-blue-800 lg:text-3xl lg:mx-20" to="/actors">Об актёре</router-link>
    </side-info>
    
  </div>
</template>

<script>
import gsap from 'gsap';
import CSSPlugin from 'gsap/all';

export default {
  props: ['imageSource', 'bgClass', 'imgClass', 'position', 'containerId', 'imgId', 'imgInfoText', 'imgInfoHeading'],
  data() {
    return {
      showMoreInfo: false,
      infoPanelOpen: false,
    };
  },
  mounted() {
    this.onImageHover();
    gsap.registerPlugin(CSSPlugin);
  },

  methods: {
    onImageClick() {
      this.infoPanelOpen = true;
      
      const bodyEl = document.getElementsByTagName("body")[0];
      bodyEl.style.overflowY = "hidden";
    },
    closeInfoPanel() {
      this.infoPanelOpen = false;
      
      const bodyEl = document.getElementsByTagName("body")[0];
      bodyEl.style.overflowY = "";
    },
    onImageHover() {
      const wrapper = document.getElementById(this.containerId);
      const image = wrapper.firstElementChild;
      const imageStyle = image.style;

      wrapper.onmousemove = function (e) {
        const x = e.clientX - wrapper.getBoundingClientRect().left;
        const y = e.clientY - wrapper.getBoundingClientRect().top;
        const xc = wrapper.getBoundingClientRect().width / 2;
        const yc = wrapper.getBoundingClientRect().height / 2;
        const dx = xc - x;
        const dy = yc - y;

        imageStyle.setProperty('--rx', `${dy / -40}deg`);
        imageStyle.setProperty('--ry', `${dx / -40}deg`);
      };

      wrapper.onmouseleave = function () {
        imageStyle.setProperty('--ty', '0');
        imageStyle.setProperty('--rx', '0');
        imageStyle.setProperty('--ry', '0');
      };

      image.onmousedown = function () {
        imageStyle.setProperty('--tz', '-45px');
      };

      image.onmouseup = function () {
        imageStyle.setProperty('--tz', '-12px');
      };
    },
  },
};
</script>

<style scoped>
img {
  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
    rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
  transition: box-shadow 0.2s ease;
  will-change: transform;
}

img:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
</style>
