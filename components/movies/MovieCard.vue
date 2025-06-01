<template>
  <div class="group relative">
    <!-- Glowing background effect -->
    <div class="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <!-- Movie Card -->
    <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-primary-500/30">
      <!-- Movie Poster -->
      <div class="relative overflow-hidden">
        <img 
          :src="movie.thumbnail || movie.poster" 
          :alt="`${movie.title} movie poster`"
          class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-transparent to-transparent"></div>
        
        <!-- Play button overlay -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-200">
            <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        </div>

        <!-- Rating badge -->
        <div class="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          {{ movie.rating?.toFixed(1) || '8.5' }}
        </div>

        <!-- Genre badge -->
        <div class="absolute top-4 left-4 bg-dark-400/80 backdrop-blur-md text-primary-300 px-3 py-1 rounded-full text-xs font-medium border border-primary-500/30">
          {{ Array.isArray(movie.genre) ? movie.genre[0] : movie.genre || 'Drama' }}
        </div>
      </div>

      <!-- Movie Info -->
      <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 line-clamp-1">
          {{ movie.title }}
        </h3>
        
        <p class="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
          {{ movie.description }}
        </p>
        
        <!-- Movie meta info -->
        <div class="flex items-center justify-between text-xs text-gray-500">
          <span class="px-2 py-1 bg-secondary-500/20 text-secondary-300 rounded-full border border-secondary-500/30">
            {{ movie.duration || '120 min' }}
          </span>
          <span class="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30">
            {{ movie.releaseYear || movie.year || '2024' }}
          </span>
        </div>

        <!-- Action button -->
        <NuxtLink 
          :to="`/movies/${movie.id}`"
          class="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2 group/btn"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          View Details
          <svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
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
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

defineEmits(['playTrailer', 'toggleWatchlist']);
</script>

<style scoped>
/* Text clamp utilities */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation keyframes */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-10px) rotate(5deg); 
  }
}

@keyframes float-reverse {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-8px) rotate(-5deg); 
  }
}

/* Apply animations */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 4s ease-in-out infinite;
}

/* Focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.8);
  outline-offset: 2px;
}
</style>