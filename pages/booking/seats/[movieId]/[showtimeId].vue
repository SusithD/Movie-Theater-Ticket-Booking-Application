<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="movie && showtime" class="max-w-5xl mx-auto">
      <!-- Booking Header -->
      <div class="mb-8">
        <NuxtLink :to="`/movies/${movie.id}`" class="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Back to Movie
        </NuxtLink>
        
        <h1 class="text-3xl font-bold mb-2">Select Your Seats</h1>
        <div class="flex items-center text-gray-400">
          <span class="text-white font-medium">{{ movie.title }}</span>
          <span class="mx-2">•</span>
          <span>{{ formatDate(showtime.date) }}</span>
          <span class="mx-2">•</span>
          <span>{{ showtime.time }}</span>
          <span class="mx-2">•</span>
          <span>Screen {{ showtime.screen }}</span>
        </div>
      </div>
      
      <!-- Seat Selection -->
      <div class="bg-dark-300 rounded-lg p-4 md:p-8 mb-8">
        <SeatMap 
          :seatMap="seatMap" 
          :selectedSeats="currentBooking.seats"
          :ticketPrice="currentBooking.ticketPrice"
          @toggle-seat="toggleSeat"
        />
      </div>
      
      <!-- Actions -->
      <div class="flex justify-between items-center">
        <div class="text-gray-400">
          <span v-if="currentBooking.seats.length > 0">
            {{ currentBooking.seats.length }} seat{{ currentBooking.seats.length > 1 ? 's' : '' }} selected
          </span>
          <span v-else>No seats selected</span>
        </div>
        
        <button 
          @click="proceedToCheckout"
          class="btn-accent"
          :disabled="currentBooking.seats.length === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentBooking.seats.length === 0 }"
        >
          Continue to Checkout
        </button>
      </div>
    </div>
    
    <!-- Loading State -->
    <div v-else class="text-center py-16">
      <div class="inline-block animate-pulse-slow">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      </div>
      <p class="text-lg mt-4">Loading seat selection...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { useMovies } from '~/composables/useMovies';
import { useBooking } from '~/composables/useBooking';
import { useAuth } from '~/composables/useAuth';
import SeatMap from '~/components/booking/SeatMap.vue';

const route = useRoute();
const router = useRouter();
const { getMovie, getShowtime, generateSeatMap } = useMovies();
const { currentBooking, toggleSeat, setMovieAndShowtime } = useBooking();
const { isLoggedIn } = useAuth();

// Get movie and showtime IDs from route params
const movieId = computed(() => parseInt(route.params.movieId));
const showtimeId = computed(() => parseInt(route.params.showtimeId));

// Get movie and showtime details
const movie = computed(() => getMovie(movieId.value));
const showtime = computed(() => {
  if (!movie.value) return null;
  return movie.value.showtimes.find(s => s.id === showtimeId.value);
});

// Generate seat map
const seatMap = computed(() => {
  if (!showtime.value) return [];
  return generateSeatMap(showtime.value.screen, showtimeId.value);
});

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });
}

// Initialize booking if necessary
onMounted(() => {
  if (movie.value && showtime.value && (!currentBooking.value.movieId || currentBooking.value.movieId !== movie.value.id)) {
    setMovieAndShowtime(movie.value, showtime.value);
  }
});

// Proceed to checkout
function proceedToCheckout() {
  if (currentBooking.value.seats.length === 0) return;
  
  if (!isLoggedIn.value) {
    // If not logged in, redirect to login with a return path
    router.push(`/login?redirect=/booking/checkout`);
  } else {
    // If logged in, proceed to checkout
    router.push('/booking/checkout');
  }
}

definePageMeta({
  layout: 'default'
});
</script>