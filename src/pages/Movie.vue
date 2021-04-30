<template>
  <div class="font-extralight font-serif">
    <div class="gap-8 mb-16 grid grid:cols-1 md:grid-cols-2">
      <text-half
        class="2xl:ml-8 md:rounded-r-2xl"
        :text="textAboutGesha"
      ></text-half>
      <image-half
        bgClass="bg-gradient-to-br from-yellow-400 to-pink-500 via-red-500"
        imgClass="md:rounded-l-2xl"
        imgId="ImgGesha"
        class="md:rounded-l-2xl mx-8 p-6 2xl:mr-8 2xl:p-28 md:m-0 md:pb-12 md:pl-12 md:pr-0 md:pt-12"
        containerId="ContainerGesha"
        image-source="movie_mironov.jpg"
        position="right"
        imgInfoHeading="Адрей Миронов"
        :imgInfoText="moreInfoGesha"
      ></image-half>
    </div>
    <img src="../../assets/images/cover-line.png" />
    <div class="bg-black">
      <div class="pt-12 md:p-16 flex grid grid:cols-1">
        <p
          class="justify-self-center mx-4 my-2 p-6 md:w-2/3 text-2xl text-gray-50 text-justify 2xl:text-4xl md:text-3xl xl:text-4xl"
        >
          Герой по&nbsp;распоряжению Шефа должен доставить в&nbsp;Советский Союз
          золото и&nbsp;бриллианты. Для выполнения задания ему нужно
          во&nbsp;время стоянки в&nbsp;Стамбуле найти пункт обмена
          контрабандного товара, находящийся под вывеской &laquo;Aphoteka
          Chikanuk&raquo;, изобразить падение и&nbsp;произнести пароль
          &laquo;Чёрт побери!&raquo;
        </p>
      </div>
      <div
        id="videoContainer"
        class="items-start gap-12 mx-12 mt-20 pt-16 pb-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <video-block
          v-for="block in videoBlocks"
          :key="block.id"
          :text="block.text"
          :video="block.video"
          :image="block.image"
          v-observe-visibility="{
            callback: playWhenVisible,
            intersection: {
              threshold: 0.5,
            },
          }"
        ></video-block>
      </div>
    </div>
    <div class="bg-gradient-to-b from-black to-blue-900 pb-60">
      <div class="gap-8 mb-16 grid grid:cols-1 md:grid-cols-2">
        <image-half
          image-source="movie_nikulin.jpg"
          class="mx-8 p-6 2xl:ml-8 2xl:p-28 md:m-0 md:pb-12 md:pr-12 md:pl-0 md:pt-12 md:rounded-r-2xl"
          imgClass="md:rounded-r-2xl"
          containerId="ContainerSemenSemenovich"
          imgId="semenSemenovich"
          bgClass="bg-gradient-to-bl from-pink-500 to-yellow-400 via-red-500"
          imgInfoHeading="Юрий Никулин"
          :imgInfoText="moreInfoSenya"
        ></image-half>
        <text-half class="2xl:mr-8 md:rounded-l-2xl" :text="textAboutSemSem">
        </text-half>
      </div>
    </div>
  </div>
</template>
<script>
import ImageHalf from '../components/ui/ImageHalf.vue';
import TextHalf from '../components/ui/TextHalf.vue';
import VideoBlock from '../components/ui/VideoBlock.vue';

export default {
  components: {
    ImageHalf,
    TextHalf,
    VideoBlock,
  },
  data() {
    return {
      textAboutGesha:
        'Агент-перевозчик контрабанды Геша, он&nbsp;же Геннадий Петрович Козодоев, отправляется в&nbsp;зарубежный круиз на&nbsp;теплоходе &laquo;Михаил Светлов&raquo;.',
      textAboutSemSem:
        'Семён Семёнович Горбунков, первый раз поехавший за&nbsp;границу, становится случайно затянутым в&nbsp;незаконную операцию по&nbsp;перевозке контрабандных бриллиантов',
      moreInfoGesha:
        'Родился 7 марта 1941 года в Москве, в семье известных эстрадных артистов Марии Владимировны Мироновой (1911-1997) и Александра Семёновича Менакера (1913-1982). Родители решили записать дату рождения сына 8 марта, в честь женского праздника. Заслуженный и народный артист РСФСР. Окончил Московское театральное училище имени Б.В. Щукина (1962, курс Ц.Л. Мансуровой). Выступал как артист и певец на эстраде и телевидении.',
      linkGesha: '',
      moreInfoSenya:
        'Родился 18 декабря 1921 года в Демидове (Смоленская губерния). Выдающийся советский артист цирка и киноактер. Заслуженный и народный артист РСФСР и СССР.Служил в Красной Армии с 1939 по 1946, пройдя «зимнюю» советско-финскую и Великую отечественную войну. После окончания войны пытался поступить во ВГИК и другие театральные институты, куда его не приняли, так как комиссии не обнаруживали в нем актерских способностей. В конце концов, поступил в студию клоунады при Московском цирке на Цветном бульваре.',
      isVideoBlockVisible: false,
      videoBlocks: {
        el1: {
          id: 1,
          image: 'gesha_apteka_search.jpg',
          video: 'gesha_apteka_search.mp4',
          text:
            'Геша пытается найти Аптеку &laquo;Чиканук&raquo;, в&nbsp;которой ему должны поставить гипс с&nbsp;контрабандными бриллиантами',
        },
        el2: {
          id: 2,
          image: 'gesha_apteka_waiting.jpg',
          video: 'gesha_apteka_waiting.mp4',
          text:
            'Тем временем Гешу дожидаются в&nbsp;Аптеке, чтобы поместить бриллианты к&nbsp;гипс для контрабанды в&nbsp;СССР',
        },
        el3: {
          id: 3,
          image: 'semen_semenych_apteka.jpg',
          video: 'semen_semenych_apteka.mp4',
          text:
            'Семён Семёнович Горбунков, потеряв Гешу, подскальзывается на&nbsp;арбузе возле той самой аптеке, вывихивает руку и&nbsp;невольно называет пароль',
        },
      },
    };
  },
  methods: {
    playWhenVisible(isVideoBlockVisible) {
      const videoContainer = document.getElementById('videoContainer');
      const videos = videoContainer.querySelectorAll('video');
      this.isVideoBlockVisible = isVideoBlockVisible;

      if (isVideoBlockVisible) {
        videos.forEach((item) => item.play());
      } else {
        videos.forEach((item) => item.pause());
      }
    },
  },
};
</script>
