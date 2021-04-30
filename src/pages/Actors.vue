<template>
  <p>Actors</p>
  
  <a v-for="actor in actors" :key="actor.id">
    
    {{ actor.name }}
    {{ actor.other_movies }}
  </a>
  
</template>

<script>
export default {
  data() {
    return {
      actors: [
        {
          id: '1',
          name: 'Yuriy Nikulin',
          other_movies: 'Operation Y',
        },
        {
          id: '2',
          name: 'Georgiy Vitzin',
          other_movies: 'It Can\'t Be',
        },
        {
          id: '3',
          name: 'Morgunov',
          other_movies: 'Pyos-Barbos'
        }
      ],
    };
  }
}
</script>