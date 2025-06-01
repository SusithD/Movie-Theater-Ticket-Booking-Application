<template>
  <header class="sticky top-0 z-50 bg-gradient-to-r from-dark-400/95 via-dark-300/95 to-dark-400/95 backdrop-blur-xl border-b border-primary-500/20 shadow-lg shadow-dark-500/20">
    <!-- Animated background overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-secondary-500/5 opacity-50"></div>

    <div class="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
      <!-- Enhanced Logo -->
      <NuxtLink to="/" class="group relative flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
        <!-- Logo background effect -->
        <div class="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Logo content -->
        <div class="relative flex items-center space-x-2">
          <!-- Cinema icon -->
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
          </div>
          
          <!-- Brand text -->
          <div class="flex items-baseline space-x-1">
            <span class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 group-hover:from-primary-300 group-hover:to-primary-500 transition-all duration-300">
              Cinema
            </span>
            <span class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400 group-hover:from-accent-300 group-hover:to-accent-500 transition-all duration-300">
              Box
            </span>
          </div>
        </div>
      </NuxtLink>
      
      <!-- Enhanced Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <!-- Navigation links with enhanced hover effects -->
        <NuxtLink 
          to="/" 
          class="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          :class="{ 'text-primary-400': $route.path === '/' }"
        >
          <span class="relative z-10">Home</span>
          <!-- Hover background -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <!-- Active indicator -->
          <div v-if="$route.path === '/'" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
        </NuxtLink>

        <NuxtLink 
          to="/movies" 
          class="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          :class="{ 'text-primary-400': $route.path.startsWith('/movies') }"
        >
          <span class="relative z-10">Movies</span>
          <!-- Hover background -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <!-- Active indicator -->
          <div v-if="$route.path.startsWith('/movies')" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
        </NuxtLink>

        <NuxtLink 
          v-if="isLoggedIn" 
          to="/profile" 
          class="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          :class="{ 'text-primary-400': $route.path === '/profile' }"
        >
          <span class="relative z-10 flex items-center gap-2">
            My Profile
          </span>
          <!-- Hover background -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <!-- Active indicator -->
          <div v-if="$route.path === '/profile'" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
        </NuxtLink>

        <!-- Enhanced Auth Buttons -->
        <div class="flex items-center space-x-4">
          <NuxtLink 
            v-if="!isLoggedIn" 
            to="/login" 
            class="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
              </svg>
              Login
            </span>
            <!-- Animated background overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NuxtLink>

          <button 
            v-else 
            @click="logout" 
            class="group relative bg-white/10 backdrop-blur-md border border-white/20 hover:border-primary-400/50 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              Logout
            </span>
          </button>
        </div>
      </nav>
      
      <!-- Enhanced Mobile Menu Button -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden relative w-10 h-10 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-primary-400/50 focus:outline-none transition-all duration-300 hover:scale-105 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300" :class="{ 'rotate-90': isMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- Enhanced Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-show="isMenuOpen" class="md:hidden bg-gradient-to-br from-dark-300/95 via-dark-200/95 to-dark-300/95 backdrop-blur-xl border-b border-primary-500/20 shadow-xl">
        <!-- Mobile menu background overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-accent-500/5"></div>
        
        <div class="container mx-auto px-6 py-6 flex flex-col space-y-4 relative z-10">
          <!-- Mobile navigation links -->
          <NuxtLink 
            to="/" 
            class="group relative flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl font-medium"
            :class="{ 'text-primary-400 bg-primary-500/10': $route.path === '/' }"
            @click="isMenuOpen = false"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative z-10 flex items-center gap-3">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Home
            </span>
          </NuxtLink>

          <NuxtLink 
            to="/movies" 
            class="group relative flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl font-medium"
            :class="{ 'text-primary-400 bg-primary-500/10': $route.path.startsWith('/movies') }"
            @click="isMenuOpen = false"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative z-10 flex items-center gap-3">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
              </svg>
              Movies
            </span>
          </NuxtLink>

          <NuxtLink 
            v-if="isLoggedIn" 
            to="/profile" 
            class="group relative flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl font-medium"
            :class="{ 'text-primary-400 bg-primary-500/10': $route.path === '/profile' }"
            @click="isMenuOpen = false"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative z-10 flex items-center gap-3">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              My Profile
            </span>
          </NuxtLink>

          <!-- Mobile Auth Section -->
          <div class="pt-4 border-t border-white/10">
            <NuxtLink 
              v-if="!isLoggedIn" 
              to="/login" 
              class="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-3 w-full"
              @click="isMenuOpen = false"
            >
              <span class="relative z-10 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                </svg>
                Login to Your Account
              </span>
              <!-- Animated background overlay -->
              <div class="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>

            <button 
              v-else 
              @click="logout" 
              class="group relative bg-white/10 backdrop-blur-md border border-white/20 hover:border-primary-400/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-3 w-full"
            >
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                Logout
              </span>
            </button>
          </div>

          <!-- Mobile menu decorative elements -->
          <div class="flex justify-center pt-4">
            <div class="flex space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
              <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

const isMenuOpen = ref(false);
const { isLoggedIn, logout } = useAuth();
</script>

<style scoped>
/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}
</style>