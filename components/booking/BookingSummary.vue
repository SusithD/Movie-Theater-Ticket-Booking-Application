<template>
  <div class="booking-summary card-glass p-4 lg:p-6">
    <h3 class="text-lg font-semibold mb-4">Booking Summary</h3>
    
    <div class="flex flex-col space-y-4">
      <div class="flex justify-between">
        <span class="text-gray-400">Movie</span>
        <span class="font-medium">{{ booking.movieTitle }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-gray-400">Date</span>
        <span class="font-medium">{{ formatDate(booking.date) }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-gray-400">Time</span>
        <span class="font-medium">{{ booking.time }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-gray-400">Screen</span>
        <span class="font-medium">{{ booking.screen }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-gray-400">Seats</span>
        <span class="font-medium">{{ booking.seats.join(', ') }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-gray-400">Tickets</span>
        <span class="font-medium">{{ booking.seats.length }} × ${{ booking.ticketPrice.toFixed(2) }}</span>
      </div>
      
      <div class="border-t border-gray-700 my-2 pt-4">
        <div class="flex justify-between font-semibold">
          <span>Total</span>
          <span class="text-accent-400">${{ booking.totalAmount.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  booking: {
    type: Object,
    required: true
  }
});

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}
</script>