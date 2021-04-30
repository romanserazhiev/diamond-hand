import { createRouter, createWebHistory } from 'vue-router';

import Movie from './pages/Movie.vue';
import Actors from './pages/Actors.vue';
import Cinemas from './pages/Cinemas.vue';
// import The404 from './pages/The404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Movie },
    { path: '/actors', component: Actors },
    { path: '/cinemas', component: Cinemas }
    // { path: '/*', component: The404 }
  ]
});

export default router;