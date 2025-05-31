<template>
  <div class="bg-dark-300 rounded-lg p-4 mb-6">
    <h3 class="text-lg font-semibold mb-4">Select a Showtime</h3>
    
    <div class="mb-4">
      <div class="flex flex-wrap gap-2 mb-4">
        <button 
          v-for="date in availableDates" 
          :key="date" 
          @click="selectedDate = date"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            selectedDate === date 
              ? 'bg-primary-600 text-white' 
              : 'bg-dark-200 text-gray-300 hover:bg-dark-100'
          ]"
        >
          {{ formatDate(date) }}
        </button>
      </div>
    </div>
    
    <div v-if="selectedDate" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <button 
        v-for="showtime in filteredShowtimes" 
        :key="showtime.id"
        @click="selectShowtime(showtime)"
        :class="[
          'px-4 py-3 rounded-lg text-sm font-medium transition-all',
          selectedShowtime?.id === showtime.id 
            ? 'bg-primary-600 text-white transform scale-105' 
            : 'bg-dark-200 text-gray-300 hover:bg-dark-100'
        ]"
      >
        <div class="flex justify-between items-center">
          <span class="text-base">{{ showtime.time }}</span>
          <span class="text-xs opacity-80">Screen {{ showtime.screen }}</span>
        </div>
        <div class="text-xs mt-1 text-left">
          {{ showtime.availableSeats }} seats available
        </div>
      </button>
    </div>
    
    <div v-if="selectedShowtime" class="mt-6">
      <button 
        @click="proceed"
        class="btn-accent w-full"
      >
        Select Seats
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  showtimes: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select']);

// Get unique dates from showtimes
const availableDates = computed(() => {
  return [...new Set(props.showtimes.map(s => s.date))];
});

const selectedDate = ref(availableDates.value[0] || null);
const selectedShowtime = ref(null);

// Filter showtimes by selected date
const filteredShowtimes = computed(() => {
  if (!selectedDate.value) return [];
  return props.showtimes.filter(s => s.date === selectedDate.value);
});

// Format date to display as "Day, Month Date"
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

// Select a showtime
function selectShowtime(showtime) {
  selectedShowtime.value = showtime;
}

// Proceed to seat selection
function proceed() {
  if (selectedShowtime.value) {
    emit('select', selectedShowtime.value);
  }
}
</script>