<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="booking" class="max-w-3xl mx-auto">
      <!-- Success Banner -->
      <div class="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-lg p-8 mb-8 text-center">
        <div class="bg-white/10 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p class="text-gray-300">Your tickets have been booked successfully.</p>
        <p class="text-white font-medium mt-4">Booking ID: {{ booking.id }}</p>
      </div>
      
      <!-- Ticket Information -->
      <div class="bg-dark-300 rounded-lg overflow-hidden mb-8">
        <!-- Ticket Header -->
        <div class="bg-dark-200 px-6 py-4 border-b border-gray-700">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold">Movie Ticket</h2>
            <div class="text-gray-400 text-sm">{{ formatDate(booking.date) }}</div>
          </div>
        </div>
        
        <!-- Ticket Body -->
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">{{ booking.movieTitle }}</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <p class="text-gray-400 text-sm mb-1">Date</p>
              <p class="font-medium">{{ formatDate(booking.date) }}</p>
            </div>
            <div>
              <p class="text-gray-400 text-sm mb-1">Time</p>
              <p class="font-medium">{{ booking.time }}</p>
            </div>
            <div>
              <p class="text-gray-400 text-sm mb-1">Screen</p>
              <p class="font-medium">{{ booking.screen }}</p>
            </div>
          </div>
          
          <div class="mt-6">
            <p class="text-gray-400 text-sm mb-1">Seats</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="seat in booking.seats" 
                :key="seat"
                class="px-3 py-1 bg-dark-200 rounded-md font-medium"
              >
                {{ seat }}
              </span>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-6 pt-6">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-gray-400 text-sm">Total Amount</p>
                <p class="text-xl font-semibold">${{ booking.totalAmount.toFixed(2) }}</p>
              </div>
              <div class="flex gap-3">
                <button class="btn-outline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
                  </svg>
                  Download
                </button>
                <button class="btn-outline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- QR Code -->
        <div class="p-6 bg-dark-200 border-t border-gray-700 flex justify-center">
          <div class="w-40 h-40 bg-white p-2 rounded-lg">
            <div class="w-full h-full bg-gray-800 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd" />
                <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="text-center">
        <NuxtLink to="/movies" class="btn-primary inline-flex items-center">
          Browse More Movies
        </NuxtLink>
      </div>
    </div>
    
    <!-- No Booking Found -->
    <div v-else class="text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-xl font-semibold mb-2">Booking Not Found</h3>
      <p class="text-gray-400 mb-6">We couldn't find the booking you're looking for.</p>
      <NuxtLink to="/movies" class="btn-primary">Browse Movies</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useAuth } from '~/composables/useAuth';

const route = useRoute();
const { userBookings } = useAuth();

// Get booking ID from route params
const bookingId = computed(() => route.params.id);

// Find the booking with the matching ID
const booking = computed(() => {
  return userBookings.value.find(b => b.id === bookingId.value);
});

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });
}

definePageMeta({
  layout: 'default'
});
</script>