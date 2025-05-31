<template>
  <div>
    <!-- Modern Interactive Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <!-- Primary Background Image -->
        <div class="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-300"></div>
        
        <!-- Floating Geometric Shapes -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-xl animate-float-slow"></div>
          <div class="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-accent-500 to-primary-600 rounded-full blur-2xl animate-float-reverse"></div>
          <div class="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full blur-lg animate-float"></div>
          <div class="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-secondary-500 to-accent-400 rounded-full blur-xl animate-float-slow"></div>
        </div>

        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>

        <!-- Cinema Film Strip Animation -->
        <div class="absolute -right-20 top-0 h-full w-40 opacity-20 transform rotate-12">
          <div class="film-strip h-full bg-gradient-to-b from-primary-500/30 via-accent-500/30 to-primary-500/30"></div>
        </div>
        <div class="absolute -left-20 bottom-0 h-full w-40 opacity-20 transform -rotate-12">
          <div class="film-strip h-full bg-gradient-to-t from-secondary-500/30 via-primary-500/30 to-secondary-500/30"></div>
        </div>
      </div>

      <!-- Content Container -->
      <div class="relative z-20 container mx-auto px-6 py-20">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          
          <!-- Left Content -->
          <div class="flex-1 text-center lg:text-left space-y-8">
            <!-- Animated Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30 rounded-full text-sm font-medium text-primary-300 animate-fade-in-up">
              <span class="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              Now Playing in Premium Theaters
            </div>

            <!-- Main Heading with Gradient Text -->
            <div class="space-y-4">
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-white animate-fade-in-up" style="animation-delay: 0.2s;">
                  Experience
                </span>
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-fade-in-up" style="animation-delay: 0.4s;">
                  Cinema Magic
                </span>
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-200 to-white animate-fade-in-up" style="animation-delay: 0.6s;">
                  Like Never Before
                </span>
              </h1>
            </div>

            <!-- Subtitle with Typewriter Effect -->
            <p class="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up" style="animation-delay: 0.8s;">
              Immerse yourself in blockbuster entertainment with 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 font-semibold">premium seating</span>, 
              crystal-clear sound, and seamless booking.
            </p>

            <!-- Interactive Stats -->
            <div class="flex flex-wrap justify-center lg:justify-start gap-8 text-center animate-fade-in-up" style="animation-delay: 1s;">
              <div class="group cursor-pointer">
                <div class="text-3xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">1000+</div>
                <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Happy Customers</div>
              </div>
              <div class="group cursor-pointer">
                <div class="text-3xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors">24/7</div>
                <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Online Booking</div>
              </div>
              <div class="group cursor-pointer">
                <div class="text-3xl font-bold text-secondary-400 group-hover:text-secondary-300 transition-colors">50+</div>
                <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Premium Screens</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 1.2s;">
              <NuxtLink 
                to="/movies" 
                class="group relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 transform-gpu"
              >
                <span class="relative z-10 flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  Explore Movies
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-accent-500 via-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NuxtLink>

              <button class="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-primary-400/50">
                <span class="flex items-center justify-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  Watch Trailer
                </span>
              </button>
            </div>
          </div>

          <!-- Right Content - Interactive Movie Showcase -->
          <div class="flex-1 max-w-lg animate-fade-in-up" style="animation-delay: 1.4s;">
            <div class="relative">
              <!-- Main Movie Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 group cursor-pointer">
                <!-- Glowing Border Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <div class="space-y-6">
                  <!-- Movie Poster -->
                  <div class="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.pexels.com/photos/3117550/pexels-photo-3117550.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Featured Movie" 
                      class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent"></div>
                    
                    <!-- Play Button Overlay -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                    </div>

                    <!-- Rating Badge -->
                    <div class="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      8.7
                    </div>
                  </div>

                  <!-- Movie Info -->
                  <div class="space-y-4">
                    <h3 class="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">Dune: Part Two</h3>
                    <p class="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators...
                    </p>
                    
                    <!-- Quick Actions -->
                    <div class="flex gap-3">
                      <span class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30">Sci-Fi</span>
                      <span class="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs font-medium border border-accent-500/30">166 min</span>
                      <span class="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-xs font-medium border border-secondary-500/30">2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Tickets Animation -->
              <div class="absolute -top-6 -right-6 w-20 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg opacity-80 transform rotate-12 animate-float"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-10 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-lg opacity-60 transform -rotate-12 animate-float-reverse"></div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Movies Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <!-- Subtle gradient background -->
        <div class="absolute inset-0 bg-gradient-to-b from-dark-400 via-dark-300 to-dark-400"></div>
        
        <!-- Floating particles -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-10 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float"></div>
          <div class="absolute top-32 right-1/3 w-1 h-1 bg-accent-400 rounded-full animate-float-slow"></div>
          <div class="absolute bottom-20 left-1/2 w-3 h-3 bg-secondary-400 rounded-full animate-float-reverse"></div>
          <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-primary-300 rounded-full animate-float"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <!-- Enhanced Section Header -->
        <div class="text-center mb-16 space-y-6">
          <!-- Animated Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30 rounded-full text-sm font-medium text-primary-300 animate-fade-in-up">
            <span class="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            Handpicked for You
          </div>

          <!-- Main Title with Gradient -->
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fade-in-up" style="animation-delay: 0.2s;">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-white">
              Featured
            </span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 mt-2">
              Movies
            </span>
          </h2>

          <!-- Subtitle -->
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
            Discover the most <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 font-semibold">critically acclaimed</span> and 
            audience-favorite films currently playing
          </p>

          <!-- Enhanced View All Button -->
          <div class="flex justify-center animate-fade-in-up" style="animation-delay: 0.6s;">
            <NuxtLink 
              to="/movies" 
              class="group relative overflow-hidden bg-gradient-to-r from-primary-600/80 to-accent-600/80 hover:from-primary-500 hover:to-accent-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 backdrop-blur-md border border-primary-500/30"
            >
              <span class="relative z-10 flex items-center gap-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                View All Movies
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              
              <!-- Animated background overlay -->
              <div class="absolute inset-0 bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Enhanced Movie Grid -->
        <div class="relative">
          <!-- Grid container with staggered animations -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="(movie, index) in featuredMovies" 
              :key="movie.id"
              class="animate-fade-in-up"
              :style="`animation-delay: ${0.8 + (index * 0.1)}s`"
            >
              <!-- Enhanced Movie Card Wrapper -->
              <div class="group relative">
                <!-- Glowing background effect -->
                <div class="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <!-- Movie Card -->
                <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-primary-500/30">
                  <!-- Movie Poster -->
                  <div class="relative overflow-hidden">
                    <img 
                      :src="movie.poster" 
                      :alt="movie.title"
                      class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
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
                    <div class="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {{ movie.rating }}
                    </div>

                    <!-- Genre badge -->
                    <div class="absolute top-4 left-4 bg-dark-400/80 backdrop-blur-md text-primary-300 px-3 py-1 rounded-full text-xs font-medium border border-primary-500/30">
                      {{ movie.genre }}
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
                        {{ movie.year || '2024' }}
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

                  <!-- Floating elements -->
                  <div class="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-60 animate-float"></div>
                  <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full opacity-40 animate-float-reverse"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div class="flex space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
              <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="bg-dark-300 py-16 mb-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-12">How It Works</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <h3 class="text-xl font-semibold mb-2">Browse Movies</h3>
            <p class="text-gray-400">Explore our collection of latest movies and find something you'll love.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <h3 class="text-xl font-semibold mb-2">Choose Seats</h3>
            <p class="text-gray-400">Select your preferred seats from our interactive seating chart.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <h3 class="text-xl font-semibold mb-2">Enjoy the Show</h3>
            <p class="text-gray-400">Receive your tickets instantly and head to the cinema!</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="container mx-auto px-4 mb-16">
      <h2 class="text-2xl font-bold text-center mb-12">What Our Customers Say</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card-glass p-6">
          <div class="flex items-center mb-4">
            <div class="text-accent-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-300 mb-4">"The booking process was incredibly smooth. I was able to select my seats and complete my purchase in minutes!"</p>
          <div class="flex items-center">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer" class="w-10 h-10 rounded-full object-cover mr-3" />
            <div>
              <p class="font-medium">Sarah Johnson</p>
              <p class="text-xs text-gray-400">Regular Moviegoer</p>
            </div>
          </div>
        </div>
        
        <div class="card-glass p-6">
          <div class="flex items-center mb-4">
            <div class="text-accent-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-300 mb-4">"I love the seat selection feature. Being able to see exactly where I'll be sitting gives me peace of mind."</p>
          <div class="flex items-center">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer" class="w-10 h-10 rounded-full object-cover mr-3" />
            <div>
              <p class="font-medium">Michael Chen</p>
              <p class="text-xs text-gray-400">Film Enthusiast</p>
            </div>
          </div>
        </div>
        
        <div class="card-glass p-6">
          <div class="flex items-center mb-4">
            <div class="text-accent-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div class="text-accent-500 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-300 mb-4">"This is the easiest way to book movie tickets. No more waiting in long lines at the theater!"</p>
          <div class="flex items-center">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer" class="w-10 h-10 rounded-full object-cover mr-3" />
            <div>
              <p class="font-medium">Emma Rodriguez</p>
              <p class="text-xs text-gray-400">Movie Lover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="bg-gradient-to-r from-primary-900 to-secondary-900 py-16 mb-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Experience the Magic of Cinema?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Book your tickets now and enjoy the latest movies in comfort.
        </p>
        <NuxtLink to="/movies" class="btn-accent inline-flex items-center text-lg px-8 py-3">
          Get Started
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMovies } from '~/composables/useMovies';
// Import the MovieCard component
import MovieCard from '~/components/movies/MovieCard.vue';

const { allMovies } = useMovies();

// Get top rated movies for featured section
const featuredMovies = computed(() => {
  return allMovies()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
});

definePageMeta({
  layout: 'default'
});
</script>

<style>
/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

/* Fade In Up Animation */
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

/* Bounce Animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Film Strip Animation */
@keyframes film-strip {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

/* Add your custom styles here */
</style>