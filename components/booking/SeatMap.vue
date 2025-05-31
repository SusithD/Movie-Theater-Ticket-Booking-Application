<template>
  <div class="seat-selection-container">
    <!-- Screen -->
    <div class="screen-container mb-10">
      <div class="screen mx-auto">
        <span class="text-xs text-center block mt-2 text-gray-400">SCREEN</span>
      </div>
    </div>
    
    <!-- Seat Map -->
    <div class="seat-map mb-8">
      <div v-for="(row, rowIndex) in seatMap" :key="`row-${rowIndex}`" class="seat-row flex justify-center mb-2">
        <div class="row-label flex items-center justify-center w-8 mr-2 text-gray-400">
          {{ row[0]?.row }}
        </div>
        <div class="flex gap-1">
          <button
            v-for="seat in row"
            :key="seat.id"
            :class="[
              'seat',
              seat.status === 'available' ? 'available' : '',
              seat.status === 'booked' ? 'booked' : '',
              seat.status === 'reserved' ? 'reserved' : '',
              isSelected(seat.id) ? 'selected' : ''
            ]"
            :disabled="seat.status !== 'available' && !isSelected(seat.id)"
            @click="toggleSeat(seat)"
          >
            <span class="seat-label">{{ seat.id }}</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Legend -->
    <div class="legend flex justify-center gap-6 text-sm mb-6">
      <div class="flex items-center">
        <div class="seat available w-5 h-5 mr-2"></div>
        <span>Available</span>
      </div>
      <div class="flex items-center">
        <div class="seat selected w-5 h-5 mr-2"></div>
        <span>Selected</span>
      </div>
      <div class="flex items-center">
        <div class="seat booked w-5 h-5 mr-2"></div>
        <span>Booked</span>
      </div>
      <div class="flex items-center">
        <div class="seat reserved w-5 h-5 mr-2"></div>
        <span>Reserved</span>
      </div>
    </div>
    
    <!-- Selection Summary -->
    <div v-if="selectedSeats.length > 0" class="selection-summary bg-dark-300 p-4 rounded-lg">
      <div class="text-sm text-gray-300 mb-2">
        Selected Seats: <span class="font-medium text-white">{{ selectedSeats.join(', ') }}</span>
      </div>
      <div class="text-sm text-gray-300">
        Total: <span class="font-medium text-white">${{ (selectedSeats.length * ticketPrice).toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  seatMap: {
    type: Array,
    required: true
  },
  selectedSeats: {
    type: Array,
    default: () => []
  },
  ticketPrice: {
    type: Number,
    default: 12.00
  }
});

const emit = defineEmits(['toggle-seat']);

function isSelected(seatId) {
  return props.selectedSeats.includes(seatId);
}

function toggleSeat(seat) {
  if (seat.status === 'available' || isSelected(seat.id)) {
    emit('toggle-seat', seat);
  }
}
</script>

<style scoped>
.screen {
  width: 80%;
  height: 10px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  transform: perspective(200px) rotateX(-30deg);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.screen-container {
  perspective: 500px;
  padding-top: 20px;
}

.seat-row {
  perspective: 500px;
}

.seat {
  width: 26px;
  height: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  font-size: 0;
}

.seat:hover .seat-label {
  opacity: 1;
  transform: translateY(0);
}

.seat-label {
  font-size: 10px;
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.2s ease;
  position: absolute;
}

.seat.available {
  background-color: rgba(79, 70, 229, 0.3);
  border: 1px solid rgba(79, 70, 229, 0.5);
}

.seat.available:hover {
  background-color: rgba(79, 70, 229, 0.5);
  transform: scale(1.1);
}

.seat.selected {
  background-color: rgba(79, 70, 229, 0.9);
  transform: scale(1.1);
  box-shadow: 0 0 8px rgba(79, 70, 229, 0.5);
}

.seat.booked {
  background-color: rgba(156, 163, 175, 0.3);
  border: 1px solid rgba(156, 163, 175, 0.4);
  cursor: not-allowed;
}

.seat.reserved {
  background-color: rgba(239, 68, 68, 0.3);
  border: 1px solid rgba(239, 68, 68, 0.4);
  cursor: not-allowed;
}
</style>