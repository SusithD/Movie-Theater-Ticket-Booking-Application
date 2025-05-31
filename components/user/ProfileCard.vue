<template>
  <div class="profile-card card-glass p-6">
    <div class="flex items-center gap-4">
      <div class="avatar-container">
        <img 
          :src="user.avatar" 
          :alt="user.name" 
          class="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
          loading="lazy"
        />
      </div>
      <div>
        <h2 class="text-xl font-semibold">{{ user.name }}</h2>
        <p class="text-gray-400">{{ user.email }}</p>
      </div>
    </div>
    
    <div class="mt-6 border-t border-gray-800 pt-4">
      <h3 class="text-lg font-medium mb-3">Account Details</h3>
      
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-gray-400">Member Since</span>
          <span>{{ memberSince }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-400">Total Bookings</span>
          <span>{{ bookingCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  bookings: {
    type: Array,
    default: () => []
  }
});

const bookingCount = computed(() => props.bookings.length);

// Generate a random member date in the past 2 years
const memberSince = computed(() => {
  const now = new Date();
  const randomMonths = Math.floor(Math.random() * 24); // 0-24 months ago
  const memberDate = new Date(now.setMonth(now.getMonth() - randomMonths));
  return memberDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
});
</script>

<style scoped>
.avatar-container {
  position: relative;
}

.avatar-container::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.5), rgba(249, 115, 22, 0.5));
  z-index: -1;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>