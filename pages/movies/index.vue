<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl animate-float"></div>
      <div class="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-full blur-2xl animate-float-reverse"></div>
      <div class="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 rounded-full blur-xl animate-float-slow"></div>
      <div class="absolute top-40 right-16 w-28 h-28 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-xl animate-float"></div>
      
      <!-- Floating film reels -->
      <div class="absolute top-32 left-16 opacity-5">
        <svg class="w-16 h-16 text-accent-400 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <div class="absolute bottom-20 right-20 opacity-5">
        <svg class="w-12 h-12 text-primary-400 animate-spin-slow-reverse" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center space-y-8">
          <!-- Animated Badge -->
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30 rounded-full text-sm font-medium text-primary-300 animate-fade-in-up">
            <span class="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></span>
            Now Showing & Coming Soon
          </div>

          <!-- Main Title -->
          <div class="space-y-4 animate-fade-in-up" style="animation-delay: 0.2s;">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-white">
                Discover
              </span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 mt-2">
                Amazing Movies
              </span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our extensive collection of <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400 font-semibold">blockbuster hits</span>, 
              indie gems, and upcoming releases. Your next favorite movie is just a click away.
            </p>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center gap-8 text-center animate-fade-in-up" style="animation-delay: 0.4s;">
            <div class="group cursor-pointer">
              <div class="text-3xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">{{ filteredMovies.length }}</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Movies Available</div>
            </div>
            <div class="group cursor-pointer">
              <div class="text-3xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors">{{ allGenres.length }}</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Genres</div>
            </div>
            <div class="group cursor-pointer">
              <div class="text-3xl font-bold text-secondary-400 group-hover:text-secondary-300 transition-colors">4K</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Ultra HD Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Search and Filter Section -->
    <section class="relative py-12">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Search Bar -->
          <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="relative group">
              <!-- Glowing background effect -->
              <div class="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Search input container -->
              <div class="relative bg-gradient-to-r from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
                <div class="flex items-center">
                  <!-- Search icon -->
                  <div class="flex-shrink-0 ml-4">
                    <svg class="w-6 h-6 text-gray-400 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  
                  <!-- Search input -->
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search for movies, actors, directors..."
                    class="flex-1 px-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                  />
                  
                  <!-- Clear button -->
                  <button
                    v-if="searchQuery"
                    @click="searchQuery = ''"
                    class="flex-shrink-0 mr-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Genre Filter Section -->
          <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.8s;">
            <div class="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <!-- Filter label -->
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"/>
                </svg>
                <span class="text-white font-semibold">Filter by Genre:</span>
              </div>

              <!-- Genre buttons -->
              <div class="flex flex-wrap gap-3">
                <button
                  v-for="genre in allGenres"
                  :key="genre"
                  @click="toggleGenre(genre)"
                  :class="[
                    'group relative overflow-hidden px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105',
                    selectedGenres.includes(genre)
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white hover:border-accent-400/50'
                  ]"
                >
                  <span class="relative z-10">{{ genre }}</span>
                  
                  <!-- Animated background for selected state -->
                  <div
                    v-if="selectedGenres.includes(genre)"
                    class="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </button>

                <!-- Clear filters button -->
                <button
                  v-if="selectedGenres.length > 0"
                  @click="clearFilters"
                  class="group px-4 py-2 bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-300 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-red-500/30 hover:text-red-200 hover:scale-105"
                >
                  <span class="flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    Clear All
                  </span>
                </button>
              </div>
            </div>

            <!-- Active filters display -->
            <div v-if="selectedGenres.length > 0 || searchQuery" class="mt-4 flex flex-wrap gap-2">
              <span class="text-sm text-gray-400">Active filters:</span>
              
              <!-- Search query display -->
              <span v-if="searchQuery" class="inline-flex items-center gap-2 px-3 py-1 bg-accent-500/20 border border-accent-500/30 text-accent-300 rounded-lg text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                "{{ searchQuery }}"
              </span>
              
              <!-- Selected genres display -->
              <span 
                v-for="genre in selectedGenres" 
                :key="genre"
                class="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/20 border border-primary-500/30 text-primary-300 rounded-lg text-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
                {{ genre }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Movies Grid Section -->
    <section class="relative py-12">
      <div class="container mx-auto px-6">
        <!-- Results header -->
        <div class="mb-8 animate-fade-in-up" style="animation-delay: 1s;">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 class="text-2xl font-bold text-white">
                {{ searchQuery || selectedGenres.length > 0 ? 'Search Results' : 'All Movies' }}
              </h2>
              <p class="text-gray-400 mt-1">
                {{ filteredMovies.length }} movie{{ filteredMovies.length !== 1 ? 's' : '' }} found
              </p>
            </div>
            
            <!-- Sort options (placeholder for future enhancement) -->
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-400">Sort by:</span>
              <select class="bg-dark-300/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary-500">
                <option>Latest</option>
                <option>Popular</option>
                <option>Rating</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Movies Grid -->
        <div v-if="filteredMovies.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up" style="animation-delay: 1.2s;">
          <MovieCard
            v-for="(movie, index) in filteredMovies"
            :key="movie.id"
            :movie="movie"
            :style="{ 'animation-delay': `${1.4 + index * 0.1}s` }"
            class="animate-fade-in-up"
          />
        </div>

        <!-- Enhanced No Results Message -->
        <div v-else class="text-center py-20 animate-fade-in-up" style="animation-delay: 1.2s;">
          <div class="relative">
            <!-- Background glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-secondary-500/10 rounded-3xl blur-3xl"></div>
            
            <div class="relative bg-gradient-to-br from-dark-200/50 to-dark-300/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-md mx-auto">
              <!-- Animated icon -->
              <div class="mb-6">
                <div class="relative mx-auto w-20 h-20">
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 animate-pulse"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 001 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              
              <h3 class="text-2xl font-bold text-white mb-3">No Movies Found</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                {{ searchQuery || selectedGenres.length > 0 
                   ? 'No movies match your current search criteria. Try adjusting your filters or search terms.' 
                   : 'No movies are currently available. Please check back later for new releases.' }}
              </p>
              
              <div class="space-y-3">
                <button
                  v-if="searchQuery || selectedGenres.length > 0"
                  @click="clearFilters"
                  class="group w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-500 hover:to-accent-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  <span class="flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    Clear All Filters
                  </span>
                </button>
                
                <NuxtLink 
                  to="/" 
                  class="block w-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  Back to Home
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Decorative bottom section -->
    <section class="relative py-12">
      <div class="container mx-auto px-6 text-center">
        <div class="flex justify-center space-x-4">
          <div class="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
          <div class="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
          <div class="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
        </div>
      </div>
    </section>
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