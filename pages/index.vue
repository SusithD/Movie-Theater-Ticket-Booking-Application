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
        
        <!-- Enhanced Movie Grid using MovieCard component -->
        <div class="relative">
          <!-- Grid container with staggered animations -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="(movie, index) in featuredMovies" 
              :key="movie.id"
              class="animate-fade-in-up"
              :style="`animation-delay: ${0.8 + (index * 0.1)}s`"
            >
              <!-- Use the MovieCard component -->
              <MovieCard :movie="movie" />
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
    <section class="relative py-20 overflow-hidden">
      

      <div class="container mx-auto px-6 relative z-10">
        <!-- Enhanced Section Header -->
        <div class="text-center mb-20 space-y-6">
          <!-- Animated Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 backdrop-blur-md border border-secondary-500/30 rounded-full text-sm font-medium text-secondary-300 animate-fade-in-up">
            <span class="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
            Simple & Seamless Process
          </div>

          <!-- Main Title with Gradient -->
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fade-in-up" style="animation-delay: 0.2s;">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary-200 to-white">
              How It
            </span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 mt-2">
              Works
            </span>
          </h2>

          <!-- Subtitle -->
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
            Book your perfect cinema experience in just <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400 font-semibold">three simple steps</span>. 
            From browsing to enjoying your movie, we've made it effortless.
          </p>
        </div>
        
        <!-- Enhanced Steps Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <!-- Connection Lines for Desktop -->
          <div class="hidden md:block absolute top-16 left-0 right-0 h-1">
            <div class="relative h-full">
              <!-- First connection line -->
              <div class="absolute left-1/6 right-2/3 h-full bg-gradient-to-r from-primary-500/40 via-accent-500/60 to-primary-500/40 rounded-full animate-pulse"></div>
              <!-- Second connection line -->
              <div class="absolute left-2/3 right-1/6 h-full bg-gradient-to-r from-primary-500/40 via-secondary-500/60 to-accent-500/40 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
            </div>
          </div>

          <!-- Step 1: Browse Movies -->
          <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="group relative">
              <!-- Glowing background effect -->
              <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Step Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-primary-500/30 text-center">
                <!-- Step Number -->
                <div class="relative mb-8">
                  <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary-600 to-primary-500 flex items-center justify-center text-3xl font-black text-white shadow-2xl shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow duration-300">
                    1
                  </div>
                  <!-- Floating elements -->
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full opacity-60 animate-float"></div>
                  <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-40 animate-float-reverse"></div>
                </div>

                <!-- Icon -->
                <div class="mb-6 flex justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                  Browse Movies
                </h3>
                <p class="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Explore our curated collection of the latest blockbusters, indie films, and timeless classics. 
                  Filter by genre, rating, or showtimes to find your perfect movie.
                </p>

                <!-- Action hint -->
                <div class="mt-6 inline-flex items-center text-sm text-primary-400 group-hover:text-primary-300 transition-colors">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Start Exploring
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Choose Seats -->
          <div class="animate-fade-in-up" style="animation-delay: 0.8s;">
            <div class="group relative">
              <!-- Glowing background effect -->
              <div class="absolute -inset-4 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Step Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-accent-500/30 text-center">
                <!-- Step Number -->
                <div class="relative mb-8">
                  <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-accent-600 to-accent-500 flex items-center justify-center text-3xl font-black text-white shadow-2xl shadow-accent-500/30 group-hover:shadow-accent-500/50 transition-shadow duration-300">
                    2
                  </div>
                  <!-- Floating elements -->
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full opacity-60 animate-float"></div>
                  <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full opacity-40 animate-float-reverse"></div>
                </div>

                <!-- Icon -->
                <div class="mb-6 flex justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-accent-400 group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    </div>
                </div>

                <!-- Content -->
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-accent-300 transition-colors">
                  Choose Seats
                </h3>
                <p class="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Select your preferred seats from our interactive seating chart. See real-time availability, 
                  choose premium options, and ensure the perfect view for your movie experience.
                </p>

                <!-- Action hint -->
                <div class="mt-6 inline-flex items-center text-sm text-accent-400 group-hover:text-accent-300 transition-colors">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                  </svg>
                  Pick Your Spot
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Enjoy the Show -->
          <div class="animate-fade-in-up" style="animation-delay: 1s;">
            <div class="group relative">
              <!-- Glowing background effect -->
              <div class="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 via-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Step Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-secondary-500/30 text-center">
                <!-- Step Number -->
                <div class="relative mb-8">
                  <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-secondary-600 to-secondary-500 flex items-center justify-center text-3xl font-black text-white shadow-2xl shadow-secondary-500/30 group-hover:shadow-secondary-500/50 transition-shadow duration-300">
                    3
                  </div>
                  
                </div>

                <!-- Icon -->
                <div class="mb-6 flex justify-center">
                  <div class="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-secondary-400 group-hover:text-secondary-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-secondary-300 transition-colors">
                  Enjoy the Show
                </h3>
                <p class="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Receive your digital tickets instantly via email. Simply show your QR code at the theater, 
                  grab some popcorn, and immerse yourself in the magic of cinema!
                </p>

                <!-- Action hint -->
                <div class="mt-6 inline-flex items-center text-sm text-secondary-400 group-hover:text-secondary-300 transition-colors">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Cinema Time!
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced CTA Section -->
        <div class="text-center mt-20 animate-fade-in-up" style="animation-delay: 1.2s;">
          <div class="space-y-6">
            <p class="text-lg text-gray-300">
              Ready to experience the easiest way to book movie tickets?
            </p>
            <NuxtLink 
              to="/movies" 
              class="group relative overflow-hidden bg-gradient-to-r from-secondary-600 via-primary-500 to-accent-500 hover:from-secondary-500 hover:to-accent-400 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary-500/25 inline-flex items-center gap-3"
            >
              <span class="relative z-10 flex items-center gap-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Start Booking Now
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              
              <!-- Animated background overlay -->
              <div class="absolute inset-0 bg-gradient-to-r from-accent-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
          </div>
        </div>

        <!-- Decorative bottom elements -->
        <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div class="flex space-x-3">
            <div class="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <div class="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
            <div class="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Enhanced Testimonials Section -->
    <section class="relative py-20 overflow-hidden">
      

      <div class="container mx-auto px-6 relative z-10">
        <!-- Enhanced Section Header -->
        <div class="text-center mb-16 space-y-6">
          <!-- Animated Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 backdrop-blur-md border border-accent-500/30 rounded-full text-sm font-medium text-accent-300 animate-fade-in-up">
            <span class="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            Real Stories, Real Experiences
          </div>

          <!-- Main Title with Gradient -->
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fade-in-up" style="animation-delay: 0.2s;">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-200 to-white">
              What Our
            </span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 mt-2">
              Customers Say
            </span>
          </h2>

          <!-- Subtitle -->
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
            Don't just take our word for it. Hear from <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400 font-semibold">thousands of satisfied customers</span> 
            who have experienced the magic of seamless movie booking.
          </p>

          <!-- Enhanced Stats -->
          <div class="flex flex-wrap justify-center gap-8 text-center animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="group cursor-pointer">
              <div class="text-3xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors">4.9/5</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Average Rating</div>
            </div>
            <div class="group cursor-pointer">
              <div class="text-3xl font-bold text-secondary-400 group-hover:text-secondary-300 transition-colors">50K+</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Happy Reviews</div>
            </div>
            <div class="group cursor-pointer">
              <div class="text-3xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">98%</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <!-- Enhanced Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="animate-fade-in-up" style="animation-delay: 0.8s;">
            <div class="group relative">
              <!-- Glowing background effect -->
              <div class="absolute -inset-3 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Testimonial Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-primary-500/30">
                <!-- Quote Icon -->
                <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <!-- Star Rating -->
                <div class="flex items-center mb-6 gap-1">
                  <div class="flex">
                    <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="ml-2 text-sm text-accent-300 font-medium">5.0</span>
                </div>

                <!-- Testimonial Text -->
                <p class="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors text-lg">
                  "The booking process was incredibly smooth. I was able to select my seats and complete my purchase in minutes! The interface is so intuitive and user-friendly."
                </p>

                <!-- Customer Info -->
                <div class="flex items-center">
                  <div class="relative">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Sarah Johnson" 
                      class="w-14 h-14 rounded-full object-cover border-2 border-primary-500/30 group-hover:border-primary-400/50 transition-colors"
                    />
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="font-semibold text-white group-hover:text-primary-300 transition-colors">Sarah Johnson</p>
                    <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Regular Moviegoer</p>
                    <div class="flex items-center mt-1">
                      <div class="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                      <span class="text-xs text-accent-400">Verified Customer</span>
                    </div>
                  </div>
                </div>

                <!-- Floating elements -->
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-60 animate-float"></div>
                <div class="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full opacity-40 animate-float-reverse"></div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="animate-fade-in-up" style="animation-delay: 1s;">
            <div class="group relative">
              <!-- Glowing background effect -->
              <div class="absolute -inset-3 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Testimonial Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-accent-500/30">
                <!-- Quote Icon -->
                <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-500 rounded-full flex items-center justify-center shadow-lg shadow-accent-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <!-- Star Rating -->
                <div class="flex items-center mb-6 gap-1">
                  <div class="flex">
                    <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="ml-2 text-sm text-accent-300 font-medium">5.0</span>
                </div>

                <!-- Testimonial Text -->
                <p class="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors text-lg">
                  "I love the seat selection feature. Being able to see exactly where I'll be sitting gives me peace of mind. The 3D theater view is amazing!"
                </p>

                <!-- Customer Info -->
                <div class="flex items-center">
                  <div class="relative">
                    <img 
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Michael Chen" 
                      class="w-14 h-14 rounded-full object-cover border-2 border-accent-500/30 group-hover:border-accent-400/50 transition-colors"
                    />
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="font-semibold text-white group-hover:text-secondary-300 transition-colors">Michael Chen</p>
                    <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Film Enthusiast</p>
                    <div class="flex items-center mt-1">
                      <div class="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                      <span class="text-xs text-accent-400">Verified Customer</span>
                    </div>
                  </div>
                </div>

                <!-- Floating elements -->
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full opacity-60 animate-float"></div>
                <div class="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full opacity-40 animate-float-reverse"></div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="animate-fade-in-up" style="animation-delay: 1.2s;">
            <div class="group relative">
              <!-- Glowing background effect -->
              <div class="absolute -inset-3 bg-gradient-to-r from-secondary-500/20 via-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Testimonial Card -->
              <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-secondary-500/30">
                <!-- Quote Icon -->
                <div class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary-600 to-secondary-500 rounded-full flex items-center justify-center shadow-lg shadow-secondary-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <!-- Star Rating -->
                <div class="flex items-center mb-6 gap-1">
                  <div class="flex">
                    <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <svg class="w-5 h-5 text-accent-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="ml-2 text-sm text-accent-300 font-medium">5.0</span>
                </div>

                <!-- Testimonial Text -->
                <p class="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors text-lg">
                  "This is the easiest way to book movie tickets. No more waiting in long lines at the theater! The digital tickets work flawlessly."
                </p>

                <!-- Customer Info -->
                <div class="flex items-center">
                  <div class="relative">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Emma Rodriguez" 
                      class="w-14 h-14 rounded-full object-cover border-2 border-secondary-500/30 group-hover:border-secondary-400/50 transition-colors"
                    />
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="font-semibold text-white group-hover:text-secondary-300 transition-colors">Emma Rodriguez</p>
                    <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Movie Lover</p>
                    <div class="flex items-center mt-1">
                      <div class="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                      <span class="text-xs text-accent-400">Verified Customer</span>
                    </div>
                  </div>
                </div>

                <!-- Floating elements -->
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full opacity-60 animate-float"></div>
                <div class="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-40 animate-float-reverse"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced CTA Section -->
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 1.4s;">
          <div class="space-y-6">
            <p class="text-lg text-gray-300">
              Join thousands of satisfied customers who trust our platform
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/movies" 
                class="group relative overflow-hidden bg-gradient-to-r from-accent-600 via-secondary-500 to-primary-500 hover:from-accent-500 hover:via-secondary-400 hover:to-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/25 inline-flex items-center gap-3"
              >
                <span class="relative z-10 flex items-center gap-3">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  Experience It Yourself
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
                
                <!-- Animated background overlay -->
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NuxtLink>

              <button class="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-accent-400/50 inline-flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        <!-- Decorative bottom elements -->
        <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div class="flex space-x-3">
            <div class="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
            <div class="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
            <div class="w-3 h-3 bg-primary-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="relative bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 py-20 mb-16 overflow-hidden">
      <!-- Background Elements -->
      <div class="container mx-auto px-4 text-center relative z-10">
        <!-- Main content with enhanced animations -->
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- Icon with animation -->
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full mb-6 animate-fade-in-up shadow-lg shadow-accent-500/25">
            <svg class="w-10 h-10 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <!-- Enhanced heading -->
          <h2 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style="animation-delay: 0.2s;">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-300 to-secondary-300">
              Ready to Experience the 
            </span>
            <br class="md:hidden">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400 animate-shimmer">
              Magic of Cinema?
            </span>
          </h2>

          <!-- Enhanced description -->
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
            Join <span class="text-accent-400 font-semibold">thousands of movie lovers</span> who choose our platform for the 
            <span class="text-secondary-400 font-semibold">ultimate cinematic experience</span>. 
            Book your tickets in seconds and dive into extraordinary stories.
          </p>

          <!-- Stats row -->
          <div class="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div class="text-3xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors">50K+</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Happy Customers</div>
            </div>
            <div class="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div class="text-3xl font-bold text-secondary-400 group-hover:text-secondary-300 transition-colors">1M+</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Tickets Booked</div>
            </div>
            <div class="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div class="text-3xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors">4.9★</div>
              <div class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">User Rating</div>
            </div>
          </div>

          <!-- Enhanced CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 0.8s;">
            <NuxtLink 
              to="/movies" 
              class="group relative inline-flex items-center text-lg px-8 py-4 bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <!-- Button background animation -->
              <div class="absolute inset-0 bg-gradient-to-r from-accent-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Button content -->
              <span class="relative z-10 flex items-center">
                <svg class="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-6 0H5a2 2 0 01-2-2V5a2 2 0 012-2h4m0 0v16m0-16h6m-6 0V3"/>
                </svg>
                Book Your Tickets Now
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </NuxtLink>

            <NuxtLink 
              to="/movies" 
              class="group inline-flex items-center text-lg px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:border-accent-400 hover:text-accent-400 transform hover:scale-105 transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Browse Movies
            </NuxtLink>
          </div>

          <!-- Additional features highlight -->
          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style="animation-delay: 1s;">
            <div class="group flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div class="w-10 h-10 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <div class="text-white font-semibold group-hover:text-accent-300 transition-colors">Instant Booking</div>
                <div class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Book in seconds</div>
              </div>
            </div>

            <div class="group flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div class="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                </div>
              <div>
                <div class="text-white font-semibold group-hover:text-secondary-300 transition-colors">Secure Payment</div>
                <div class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">100% Protected</div>
              </div>
            </div>

            <div class="group flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div class="w-10 h-10 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div class="text-white font-semibold group-hover:text-accent-300 transition-colors">Digital Tickets</div>
                <div class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">On your phone</div>
              </div>
            </div>
          </div>

          <!-- Trust indicators -->
          <div class="mt-8 flex justify-center items-center space-x-6 opacity-70 animate-fade-in-up" style="animation-delay: 1.2s;">
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>SSL Secured</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>No Hidden Fees</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
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

/* Shimmer Animation */
@keyframes shimmer {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

/* Add your custom styles here */
</style>