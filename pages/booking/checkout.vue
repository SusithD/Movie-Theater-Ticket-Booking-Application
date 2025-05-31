<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="hasBookingData" class="max-w-5xl mx-auto">
      <!-- Checkout Header -->
      <div class="mb-8">
        <NuxtLink :to="`/booking/seats/${currentBooking.movieId}/${currentBooking.showtimeId}`" class="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Back to Seat Selection
        </NuxtLink>
        
        <h1 class="text-3xl font-bold mb-4">Checkout</h1>
      </div>
      
      <!-- Checkout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Payment Information -->
        <div class="lg:col-span-2">
          <div class="bg-dark-300 rounded-lg p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">Payment Details</h2>
            
            <form @submit.prevent="processPayment" class="space-y-4">
              <!-- Card Holder Name -->
              <div>
                <label for="cardName" class="label">Cardholder Name</label>
                <input id="cardName" v-model="paymentDetails.cardName" type="text" class="input" placeholder="Name on card" required />
              </div>
              
              <!-- Card Number -->
              <div>
                <label for="cardNumber" class="label">Card Number</label>
                <input id="cardNumber" v-model="paymentDetails.cardNumber" type="text" class="input" placeholder="1234 5678 9012 3456" required />
              </div>
              
              <!-- Expiry and CVC -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="expiryDate" class="label">Expiry Date</label>
                  <input id="expiryDate" v-model="paymentDetails.expiryDate" type="text" class="input" placeholder="MM/YY" required />
                </div>
                <div>
                  <label for="cvc" class="label">CVC</label>
                  <input id="cvc" v-model="paymentDetails.cvc" type="text" class="input" placeholder="123" required />
                </div>
              </div>
              
              <!-- Payment Submission -->
              <div class="pt-4">
                <button type="submit" class="btn-accent w-full">
                  Pay ${{'totalAmount' in currentBooking ? currentBooking.totalAmount.toFixed(2) : '0.00'}}
                </button>
                <p class="text-gray-400 text-xs mt-2 text-center">
                  This is a demo. No real payment will be processed.
                </p>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <BookingSummary :booking="currentBooking" />
        </div>
      </div>
    </div>
    
    <!-- No Booking Data -->
    <div v-else class="text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-xl font-semibold mb-2">No Booking in Progress</h3>
      <p class="text-gray-400 mb-6">You haven't selected any movie or seats yet.</p>
      <NuxtLink to="/movies" class="btn-primary">Browse Movies</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import { useBooking } from '~/composables/useBooking';
import { useAuth } from '~/composables/useAuth';

const router = useRouter();
const { currentBooking, completeBooking } = useBooking();
const { isLoggedIn } = useAuth();

// Payment details form
const paymentDetails = ref({
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvc: ''
});

// Check if there's booking data
const hasBookingData = computed(() => 
  currentBooking.value.movieId && 
  currentBooking.value.seats && 
  currentBooking.value.seats.length > 0
);

// Check if user is logged in
onMounted(() => {
  if (!isLoggedIn.value) {
    router.push('/login?redirect=/booking/checkout');
  }
});

// Process payment (mock)
function processPayment() {
  // In a real app, this would call a payment API
  // For this demo, we'll just complete the booking
  const booking = completeBooking();
  
  // Redirect to confirmation page
  router.push(`/booking/confirmation/${booking.id}`);
}

definePageMeta({
  layout: 'default'
});
</script>