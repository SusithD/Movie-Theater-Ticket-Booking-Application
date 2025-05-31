<template>
  <div>
    <div v-if="movie" class="container mx-auto px-4 py-8">
      <!-- Back Button -->
      <NuxtLink to="/movies" class="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Back to Movies
      </NuxtLink>
      
      <!-- Movie Hero -->
      <div class="relative rounded-xl overflow-hidden mb-8">
        <div class="absolute inset-0 bg-gradient-to-r from-dark-400 via-dark-400/80 to-transparent z-10"></div>
        <img 
          :src="movie.thumbnail" 
          :alt="movie.title" 
          class="w-full h-64 md:h-96 object-cover"
        />
        <div class="absolute inset-0 flex flex-col justify-end z-20 p-6 md:p-8">
          <div class="flex flex-wrap gap-2 mb-3">
            <span 
              v-for="genre in movie.genre" 
              :key="genre" 
              class="px-2 py-1 bg-dark-200/80 backdrop-blur-sm text-gray-300 rounded-md text-xs"
            >
              {{ genre }}
            </span>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{{ movie.title }}</h1>
          <div class="flex items-center text-sm text-gray-300 mb-4">
            <span class="bg-accent-500 text-white px-2 py-1 rounded-lg text-xs font-medium mr-3">
              {{ movie.rating.toFixed(1) }}
            </span>
            <span>{{ movie.releaseYear }}</span>
            <span class="mx-2">•</span>
            <span>{{ movie.duration }}</span>
            <span class="mx-2">•</span>
            <span>Director: {{ movie.director }}</span>
          </div>
        </div>
      </div>
      
      <!-- Movie Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Movie Info -->
        <div class="lg:col-span-2">
          <div class="bg-dark-300 rounded-lg p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">About the Movie</h2>
            <p class="text-gray-300 mb-6">{{ movie.description }}</p>
            
            <h3 class="text-lg font-medium mb-3">Cast</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(actor, index) in movie.cast" :key="index" class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-sm">{{ actor.name }}</p>
                  <p class="text-gray-400 text-xs">{{ actor.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Showtimes -->
        <div class="lg:col-span-1">
          <ShowtimeSelector 
            :showtimes="movie.showtimes" 
            @select="selectShowtime"
          />
        </div>
      </div>
    </div>
    
    <!-- Loading State -->
    <div v-else class="container mx-auto px-4 py-16 text-center">
      <div class="inline-block animate-pulse-slow">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      </div>
      <p class="text-lg mt-4">Loading movie details...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { useMovies } from '~/composables/useMovies';
import { useBooking } from '~/composables/useBooking';

const route = useRoute();
const router = useRouter();
const { getMovie } = useMovies();
const { setMovieAndShowtime } = useBooking();

// Get movie ID from route params
const movieId = computed(() => parseInt(route.params.id));

// Get movie details
const movie = computed(() => getMovie(movieId.value));

// Handle showtime selection
function selectShowtime(showtime) {
  if (movie.value) {
    setMovieAndShowtime(movie.value, showtime);
    router.push(`/booking/seats/${movie.value.id}/${showtime.id}`);
  }
}

definePageMeta({
  layout: 'default'
});
</script>