<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <!-- Name Field -->
    <div v-if="showName">
      <label for="name" class="label">Full Name</label>
      <input 
        id="name" 
        v-model="form.name" 
        type="text" 
        class="input" 
        placeholder="Enter your full name"
        required
      />
    </div>
    
    <!-- Email Field -->
    <div>
      <label for="email" class="label">Email Address</label>
      <input 
        id="email" 
        v-model="form.email" 
        type="email" 
        class="input" 
        placeholder="Enter your email address"
        required
      />
    </div>
    
    <!-- Password Field -->
    <div>
      <label for="password" class="label">Password</label>
      <input 
        id="password" 
        v-model="form.password" 
        type="password" 
        class="input" 
        placeholder="Enter your password"
        required
      />
    </div>
    
    <!-- Confirm Password Field (if signup) -->
    <div v-if="showConfirmPassword">
      <label for="confirmPassword" class="label">Confirm Password</label>
      <input 
        id="confirmPassword" 
        v-model="form.confirmPassword" 
        type="password" 
        class="input" 
        placeholder="Confirm your password"
        required
      />
    </div>
    
    <!-- Error Message -->
    <div v-if="error" class="text-red-500 text-sm mt-2">
      {{ error }}
    </div>
    
    <!-- Submit Button -->
    <button type="submit" class="btn-primary w-full">
      {{ submitButtonText }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const props = defineProps({
  formType: {
    type: String,
    default: 'login', // 'login' or 'signup'
    validator: (value) => ['login', 'signup'].includes(value)
  },
  submitButtonText: {
    type: String,
    default: 'Submit'
  }
});

const emit = defineEmits(['submit']);

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const error = ref('');

const showName = computed(() => props.formType === 'signup');
const showConfirmPassword = computed(() => props.formType === 'signup');

function submitForm() {
  error.value = '';
  
  // Validate for signup
  if (props.formType === 'signup') {
    if (form.password !== form.confirmPassword) {
      error.value = 'Passwords do not match';
      return;
    }
    
    if (form.password.length < 6) {
      error.value = 'Password must be at least 6 characters';
      return;
    }
  }
  
  // Emit submit event with form data
  emit('submit', {
    name: form.name,
    email: form.email,
    password: form.password
  });
}
</script>