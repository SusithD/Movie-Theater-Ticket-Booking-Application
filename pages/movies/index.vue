<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
    <!-- Enhanced Background Effects -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.15),transparent_50%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.1),transparent_50%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)]"></div>
    
    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow"></div>
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="particle-float absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float-slow" style="top: 10%; left: 20%;"></div>
      <div class="particle-float absolute w-1 h-1 bg-violet-400/40 rounded-full animate-float-medium" style="top: 30%; right: 25%;"></div>
      <div class="particle-float absolute w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-float-fast" style="bottom: 20%; left: 15%;"></div>
      <div class="particle-float absolute w-0.5 h-0.5 bg-emerald-400/50 rounded-full animate-float-slow" style="top: 60%; right: 10%;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-12">
      <!-- Enhanced Header Section -->
      <div class="text-center mb-16 space-y-6">
        <div class="inline-flex items-center gap-4 mb-6">
          <div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-violet-500 animate-expand-width"></div>
          <div class="p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            <svg class="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v6H4V5h1zm0 8H4v2h1v-2z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="w-12 h-0.5 bg-gradient-to-l from-transparent to-violet-500 animate-expand-width"></div>
        </div>
        
        <h1 class="text-6xl md:text-7xl font-bold tracking-tight">
          <span class="bg-gradient-to-r from-white via-slate-100 to-violet-200 bg-clip-text text-transparent animate-gradient-shift">
            All Movies
          </span>
        </h1>
        
        <div class="max-w-2xl mx-auto">
          <p class="text-lg text-slate-300 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s;">
            Discover the latest blockbusters and timeless classics. Find your next cinematic adventure and book your perfect movie experience.
          </p>
        </div>

        <!-- Stats Section -->
        <div class="flex justify-center items-center gap-8 mt-8 animate-fade-in-up" style="animation-delay: 0.4s;">
          <div class="text-center">
            <div class="text-2xl font-bold text-white">{{ filteredMovies.length }}</div>
            <div class="text-sm text-slate-400">Available Movies</div>
          </div>
          <div class="w-px h-8 bg-slate-600"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">{{ allGenres.length }}</div>
            <div class="text-sm text-slate-400">Genres</div>
          </div>
          <div class="w-px h-8 bg-slate-600"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">{{ selectedGenres.length }}</div>
            <div class="text-sm text-slate-400">Active Filters</div>
          </div>
        </div>
      </div>

      <!-- Enhanced Search and Filter Section -->
      <div class="mb-12 animate-fade-in-up" style="animation-delay: 0.6s;">
        <div class="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-8 hover:bg-white/8 transition-all duration-500">
          <!-- Search Bar -->
          <div class="mb-8">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative flex items-center">
                <div class="absolute left-4 text-slate-400 group-focus-within:text-violet-400 transition-colors duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search movies by title, genre, or description..."
                  class="w-full pl-12 pr-6 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500/70 focus:bg-slate-800/70 transition-all duration-300 text-lg"
                />
                <div v-if="searchQuery" class="absolute right-4">
                  <button
                    @click="searchQuery = ''"
                    class="p-1 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Genre Filters -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-white flex items-center gap-2">
                <svg class="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"/>
                </svg>
                Filter by Genre
              </h3>
              <button
                v-if="selectedGenres.length > 0"
                @click="selectedGenres = []"
                class="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                Clear All
              </button>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <button
                v-for="(genre, index) in allGenres"
                :key="genre"
                @click="toggleGenre(genre)"
                :style="{ animationDelay: `${index * 50}ms` }"
                :class="[
                  'genre-filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-slide-in-right',
                  selectedGenres.includes(genre)
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25 border border-violet-400/50'
                    : 'bg-slate-800/60 text-slate-300 border border-slate-600/50 hover:bg-slate-700/60 hover:border-slate-500/50 hover:text-white'
                ]"
              >
                <span class="flex items-center gap-2">
                  {{ genre }}
                  <span v-if="selectedGenres.includes(genre)" class="ml-1">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <!-- Active Filters Summary -->
          <div v-if="selectedGenres.length > 0 || searchQuery" class="mt-6 pt-6 border-t border-slate-600/30">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-sm text-slate-400">Active filters:</span>
              <div v-if="searchQuery" class="flex items-center gap-1 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                Search: "{{ searchQuery }}"
                <button @click="searchQuery = ''" class="ml-1 hover:text-white transition-colors">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
              <div v-for="genre in selectedGenres" :key="genre" class="flex items-center gap-1 px-3 py-1 bg-violet-600/20 border border-violet-500/30 rounded-lg text-violet-300 text-sm">
                {{ genre }}
                <button @click="toggleGenre(genre)" class="ml-1 hover:text-white transition-colors">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Movies Grid -->
      <div v-if="filteredMovies.length > 0" class="space-y-8">
        <!-- Grid Layout Toggle -->
        <div class="flex justify-between items-center animate-fade-in-up" style="animation-delay: 0.8s;">
          <div class="flex items-center gap-4">
            <span class="text-lg font-semibold text-white">
              {{ filteredMovies.length }} Movie{{ filteredMovies.length !== 1 ? 's' : '' }} Found
            </span>
            <div class="h-4 w-px bg-slate-600"></div>
            <div class="flex items-center gap-2">
              <button
                @click="gridCols = 3"
                :class="[
                  'p-2 rounded-lg transition-all duration-200',
                  gridCols === 3 ? 'bg-violet-600 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white'
                ]"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </button>
              <button
                @click="gridCols = 4"
                :class="[
                  'p-2 rounded-lg transition-all duration-200',
                  gridCols === 4 ? 'bg-violet-600 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white'
                ]"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Sort Options -->
          <div class="flex items-center gap-4">
            <span class="text-sm text-slate-400">Sort by:</span>
            <select
              v-model="sortBy"
              class="bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500/70 transition-colors duration-300"
            >
              <option value="title">Title</option>
              <option value="rating">Rating</option>
              <option value="year">Year</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        <!-- Movies Grid with Staggered Animation -->
        <div 
          :class="[
            'grid gap-8 animate-fade-in-up',
            gridCols === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          ]"
          style="animation-delay: 1s;"
        >
          <div
            v-for="(movie, index) in filteredMovies"
            :key="movie.id"
            :style="{ animationDelay: `${1200 + index * 100}ms` }"
            class="animate-slide-in-up"
          >
            <MovieCard :movie="movie" />
          </div>
        </div>
      </div>

      <!-- Enhanced No Results Section -->
      <div v-else class="text-center py-24 animate-fade-in-up" style="animation-delay: 1s;">
        <div class="max-w-md mx-auto space-y-6">
          <!-- Animated Icon -->
          <div class="relative inline-flex">
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
            <div class="relative p-6 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <svg class="w-16 h-16 text-slate-400 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 001 1v14a1 1 0 001 1z"/>
              </svg>
            </div>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-white">No Movies Found</h3>
            <p class="text-slate-400 text-lg leading-relaxed">
              {{ searchQuery || selectedGenres.length > 0 
                 ? 'No movies match your current search criteria. Try adjusting your filters or search terms.' 
                 : 'No movies are currently available. Please check back later for new releases!' }}
            </p>
          </div>

          <div v-if="searchQuery || selectedGenres.length > 0" class="space-y-4">
            <button
              @click="clearFilters"
              class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span class="relative z-10">Clear All Filters</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <div class="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div class="text-sm text-slate-500">
              Or try searching for: 
              <span class="text-slate-300">Action, Comedy, Drama, Sci-Fi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Explicitly import the MovieCard component
import MovieCard from '~/components/movies/MovieCard.vue'

const { searchQuery, selectedGenres, filteredMovies, allGenres } = useMovies()

// New reactive properties for enhanced functionality
const gridCols = ref(4)
const sortBy = ref('title')

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
  description: 'Browse all available movies and book your tickets. Discover the latest blockbusters and timeless classics.'
})
</script>

<style scoped>
/* Advanced Animations */
@keyframes grid-flow {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(60px) translateY(60px); }
}

@keyframes expand-width {
  from { width: 0; }
  to { width: 3rem; }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  50% { transform: translateY(-15px) translateX(10px) rotate(180deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(360deg); }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Custom Utility Classes */
.animate-grid-flow {
  animation: grid-flow 20s linear infinite;
}

.animate-expand-width {
  animation: expand-width 1s ease-out 0.5s both;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

.animate-slide-in-up {
  animation: slide-in-up 0.6s ease-out both;
}

.animate-slide-in-right {
  animation: slide-in-right 0.4s ease-out both;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Interactive Elements */
.genre-filter-btn {
  position: relative;
  overflow: hidden;
}

.genre-filter-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}

.genre-filter-btn:hover::before {
  left: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .animate-fade-in-up,
  .animate-slide-in-up,
  .animate-slide-in-right {
    animation-duration: 0.6s;
  }
}

/* Performance Optimizations */
.particle-float {
  will-change: transform;
  backface-visibility: hidden;
}

.genre-filter-btn {
  will-change: transform;
  backface-visibility: hidden;
}
</style>