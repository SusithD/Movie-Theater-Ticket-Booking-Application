<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-white mb-8">All Movies</h1>
    
    <!-- Search and Filter Section -->
    <div class="mb-8">
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search movies..."
            class="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="genre in allGenres"
            :key="genre"
            @click="toggleGenre(genre)"
            :class="[
              'px-3 py-1 rounded-full text-sm transition-colors',
              selectedGenres.includes(genre)
                ? 'bg-primary-500 text-white'
                : 'bg-dark-300 text-gray-300 hover:bg-dark-200'
            ]"
          >
            {{ genre }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Movies Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    
    <!-- No Results Message -->
    <div v-if="filteredMovies.length === 0" class="text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 001 1v14a1 1 0 001 1z" />
      </svg>
      <h3 class="text-xl font-semibold text-white mb-2">No Movies Found</h3>
      <p class="text-gray-400 mb-4">
        {{ searchQuery || selectedGenres.length > 0 
           ? 'Try adjusting your search or filters' 
           : 'No movies available at the moment' }}
      </p>
      <button
        v-if="searchQuery || selectedGenres.length > 0"
        @click="clearFilters"
        class="btn-primary"
      >
        Clear Filters
      </button>
    </div>
  </div>
</template>

<script setup>
// Explicitly import the MovieCard component
import MovieCard from '~/components/movies/MovieCard.vue'

const { searchQuery, selectedGenres, filteredMovies, allGenres } = useMovies()

// Toggle genre filter
function toggleGenre(genre) {
  const index = selectedGenres.value.indexOf(genre)
  if (index > -1) {
    selectedGenres.value.splice(index, 1)
  } else {
    selectedGenres.value.push(genre)
  }
}

// Clear all filters
function clearFilters() {
  searchQuery.value = ''
  selectedGenres.value = []
}

// Set page meta
useSeoMeta({
  title: 'All Movies - Cinema Booking',
  description: 'Browse all available movies and book your tickets'
})
</script>