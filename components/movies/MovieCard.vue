<template>
  <div class="movie-card group relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-dark-300 to-dark-400 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
    <!-- Image Container with Overlay Effects -->
    <div class="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
      <img 
        :src="movie.thumbnail" 
        :alt="movie.title" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        loading="lazy" 
      />
      <!-- Multi-layer gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/40 to-transparent opacity-80"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Rating Badge with Glow Effect -->
      <div class="absolute top-3 right-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-accent-400/30">
        <div class="flex items-center gap-1">
          <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          {{ movie.rating.toFixed(1) }}
        </div>
      </div>

      <!-- Hover Play Button -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 border border-white/30">
          <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="flex-grow p-5 flex flex-col relative">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-5 bg-gradient-to-br from-primary-500 via-transparent to-accent-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
      
      <div class="relative z-10">
        <!-- Title with Gradient Effect -->
        <h3 class="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-primary-400 group-hover:to-accent-400 transition-all duration-300 line-clamp-1">
          {{ movie.title }}
        </h3>
        
        <!-- Movie Details -->
        <div class="flex items-center text-xs text-gray-400 mb-3 space-x-2">
          <span class="bg-dark-200 px-2 py-1 rounded-lg">{{ movie.releaseYear }}</span>
          <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
          <span class="bg-dark-200 px-2 py-1 rounded-lg">{{ movie.duration }}</span>
        </div>
        
        <!-- Genre Tags with Animation -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          <span 
            v-for="(genre, index) in movie.genre" 
            :key="genre" 
            :style="{ animationDelay: `${index * 100}ms` }"
            class="px-2.5 py-1 bg-gradient-to-r from-dark-200 to-dark-100 text-gray-300 rounded-full text-xs font-medium border border-gray-600/30 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          >
            {{ genre }}
          </span>
        </div>
        
        <!-- Description -->
        <p class="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {{ movie.description }}
        </p>
      </div>
      
      <!-- Action Button -->
      <div class="mt-auto relative z-10">
        <NuxtLink 
          :to="`/movies/${movie.id}`" 
          class="block w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-center font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 group/btn"
        >
          <span class="flex items-center justify-center gap-2">
            View Details
            <svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>

    <!-- Animated Border Glow -->
    <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 animate-gradient-x"></div>
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
  backdrop-filter: blur(10px);
}

.movie-card::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  border-radius: 1rem;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.movie-card:hover::before {
  opacity: 1;
}

@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

/* Custom utilities for better text clipping */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>