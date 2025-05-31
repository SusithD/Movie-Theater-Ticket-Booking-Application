<template>
  <div class="card movie-card h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
    <div class="relative h-48 md:h-64 overflow-hidden rounded-t-xl">
      <img :src="movie.thumbnail" :alt="movie.title" class="w-full h-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent"></div>
      <div class="absolute top-2 right-2 bg-accent-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
        {{ movie.rating.toFixed(1) }}
      </div>
    </div>
    
    <div class="flex-grow p-4 flex flex-col">
      <h3 class="text-lg font-semibold mb-1 line-clamp-1">{{ movie.title }}</h3>
      
      <div class="flex items-center text-xs text-gray-400 mb-3">
        <span>{{ movie.releaseYear }}</span>
        <span class="mx-2">•</span>
        <span>{{ movie.duration }}</span>
      </div>
      
      <div class="flex flex-wrap gap-1 mb-3">
        <span 
          v-for="genre in movie.genre" 
          :key="genre" 
          class="px-2 py-1 bg-dark-200 text-gray-300 rounded-md text-xs"
        >
          {{ genre }}
        </span>
      </div>
      
      <p class="text-sm text-gray-400 mb-4 line-clamp-2">{{ movie.description }}</p>
      
      <div class="mt-auto">
        <NuxtLink :to="`/movies/${movie.id}`" class="btn-primary w-full text-center">
          View Details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.movie-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
</style>