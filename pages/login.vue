<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400 relative overflow-hidden">


    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
      <div class="max-w-md w-full space-y-8 animate-fade-in-up">
        <!-- Enhanced Header Section -->
        <div class="text-center space-y-6">
          <!-- Logo/Icon -->
          <div class="group relative mx-auto w-20 h-20 mb-8">
            <!-- Glowing background effect -->
            <div class="absolute -inset-3 bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-secondary-500/30 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg class="w-10 h-10 text-primary-400 group-hover:text-primary-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              
             
            </div>
          </div>
          
          <!-- Title -->
          <div class="space-y-3 animate-fade-in-up" style="animation-delay: 0.2s;">
            <h1 class="text-4xl md:text-5xl font-black leading-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-white">
                Welcome Back
              </span>
            </h1>
            <p class="text-lg text-gray-300 leading-relaxed">
              Sign in to your account to continue your
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 font-semibold">
                cinematic journey
              </span>
            </p>
          </div>
        </div>
        
        <!-- Enhanced Login Form -->
        <div class="group relative animate-fade-in-up" style="animation-delay: 0.4s;">
          <!-- Glowing background effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary-500/30">

            
            <UserForm 
              formType="login" 
              submitButtonText="Sign In" 
              @submit="handleLogin" 
            />
            
            <!-- Divider -->
            <div class="my-8 relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-gradient-to-r from-dark-300/80 to-dark-200/80 text-gray-400 rounded-full">
                  New to our cinema?
                </span>
              </div>
            </div>
            
            <!-- Sign Up Link -->
            <div class="text-center">
              <NuxtLink 
                to="/signup" 
                class="group/link inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 backdrop-blur-md border border-accent-500/30 text-accent-300 rounded-2xl font-medium hover:text-white transition-all duration-300 hover:scale-105 hover:border-accent-400/50"
              >
                <div class="absolute -inset-1 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl blur-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-500"></div>
                <div class="relative flex items-center gap-3">
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                  </svg>
                  <span>Create New Account</span>
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Enhanced Error Message -->
        <div v-if="authError" class="group relative animate-fade-in-up" style="animation-delay: 0.6s;">
          <!-- Glowing background effect -->
          <div class="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-2xl blur-lg opacity-60"></div>
          
          <div class="relative bg-gradient-to-br from-red-900/50 to-red-800/50 backdrop-blur-xl border border-red-500/30 rounded-2xl p-4 transition-all duration-500">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-red-300 font-medium">Authentication Failed</p>
                <p class="text-red-400 text-sm">{{ authError }}</p>
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-float"></div>
          </div>
        </div>

        <!-- Additional Features -->
        <div class="text-center space-y-4 animate-fade-in-up" style="animation-delay: 0.8s;">
          <!-- Features badges -->
          <div class="flex justify-center gap-4 text-xs">
            <div class="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-300">Secure Login</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="text-gray-300">Quick Access</span>
            </div>
          </div>
          
          <!-- Decorative dots -->
          <div class="flex justify-center space-x-3 pt-6">
            <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
            <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const route = useRoute();
const router = useRouter();
const { login, authError } = useAuth();

function handleLogin(formData) {
  const success = login(formData.email, formData.password);
  
  if (success) {
    // Redirect to the requested page or to home
    const redirectPath = route.query.redirect || '/profile';
    router.push(redirectPath);
  }
}

definePageMeta({
  layout: 'default'
});
</script>