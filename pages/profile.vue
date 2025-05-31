<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="isLoggedIn">
      <h1 class="text-3xl font-bold mb-8">My Profile</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- User Profile Card -->
        <div>
          <ProfileCard :user="currentUser" :bookings="userBookings" />
        </div>
        
        <!-- Booking History -->
        <div class="lg:col-span-2">
          <div class="bg-dark-300 rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-6">Booking History</h2>
            
            <div v-if="userBookings.length > 0" class="space-y-4">
              <div v-for="booking in userBookings" :key="booking.id" class="border border-gray-700 rounded-lg p-4 hover:bg-dark-200 transition-colors">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-medium text-lg">{{ booking.movieTitle }}</h3>
                    <div class="text-sm text-gray-400 mb-2">
                      {{ formatDate(booking.date) }} • {{ booking.time }} • Screen {{ booking.screen }}
                    </div>
                    <div class="flex items-center text-sm">
                      <span class="text-gray-400 mr-2">Seats:</span>
                      <div class="flex flex-wrap gap-1">
                        <span 
                          v-for="seat in booking.seats" 
                          :key="seat"
                          class="px-2 py-0.5 bg-dark-100 rounded text-xs"
                        >
                          {{ seat }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-accent-400 font-medium">${{ booking.totalAmount.toFixed(2) }}</div>
                    <div class="text-xs text-gray-500 mt-1">Booked on {{ formatBookingDate(booking.bookingDate) }}</div>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <NuxtLink :to="`/booking/confirmation/${booking.id}`" class="text-primary-500 hover:text-primary-400 text-sm">
                    View Ticket
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <div v-else class="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p class="text-gray-400">You haven't made any bookings yet.</p>
              <NuxtLink to="/movies" class="btn-primary mt-4 inline-block">Book a Movie</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Not Logged In -->
    <div v-else class="text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <h3 class="text-xl font-semibold mb-2">Please Sign In</h3>
      <p class="text-gray-400 mb-6">You need to be logged in to view your profile.</p>
      <NuxtLink to="/login" class="btn-primary">Sign In</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth';

const { isLoggedIn, currentUser, userBookings } = useAuth();

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  });
}

// Format booking date
function formatBookingDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

definePageMeta({
  layout: 'default'
});
</script>