<template>
  <header class="sticky top-0 z-50 bg-dark-400/80 backdrop-blur-lg border-b border-gray-800">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <span class="text-primary-500 text-2xl font-bold">Cinema</span>
        <span class="text-accent-500 font-bold">Box</span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/movies" class="text-gray-300 hover:text-white transition-colors">Movies</NuxtLink>
        <NuxtLink v-if="isLoggedIn" to="/profile" class="text-gray-300 hover:text-white transition-colors">My Profile</NuxtLink>
        <NuxtLink v-if="!isLoggedIn" to="/login" class="btn-primary">Login</NuxtLink>
        <button v-else @click="logout" class="btn-outline">Logout</button>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-300 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-dark-300 border-b border-gray-800">
      <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
        <NuxtLink to="/" class="text-gray-300 hover:text-white py-2 transition-colors" @click="isMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/movies" class="text-gray-300 hover:text-white py-2 transition-colors" @click="isMenuOpen = false">Movies</NuxtLink>
        <NuxtLink v-if="isLoggedIn" to="/profile" class="text-gray-300 hover:text-white py-2 transition-colors" @click="isMenuOpen = false">My Profile</NuxtLink>
        <NuxtLink v-if="!isLoggedIn" to="/login" class="btn-primary my-2 text-center" @click="isMenuOpen = false">Login</NuxtLink>
        <button v-else @click="logout" class="btn-outline my-2 w-full">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

const isMenuOpen = ref(false);
const { isLoggedIn, logout } = useAuth();
</script>