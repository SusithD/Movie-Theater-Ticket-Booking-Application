<template>
  <div class="min-h-[calc(100vh-240px)] flex items-center justify-center px-4 py-12">
    <div class="text-center">
      <div class="mb-6">
        <div class="text-8xl font-bold text-primary-600 mb-4">{{ error?.statusCode || '404' }}</div>
        <h1 class="text-4xl font-bold mb-4">{{ error?.statusMessage || 'Page not found' }}</h1>
        <p class="text-xl text-gray-400 max-w-lg mx-auto">
          {{ error?.message || "We couldn't find the page you're looking for. The page may have been moved or doesn't exist." }}
        </p>
      </div>
      
      <div class="flex justify-center space-x-4">
        <NuxtLink 
          to="/" 
          class="btn-primary"
        >
          Back to Home
        </NuxtLink>
        <button 
          @click="handleError"
          class="btn-outline"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
});

function handleError() {
  clearError({ redirect: '/' });
}
</script>