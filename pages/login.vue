<template>
  <div class="min-h-[calc(100vh-240px)] flex items-center justify-center px-4 py-12">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-3xl font-extrabold">Welcome Back</h1>
        <p class="mt-2 text-gray-400">Sign in to your account to continue</p>
      </div>
      
      <div class="card-glass p-6 mt-8">
        <UserForm 
          formType="login" 
          submitButtonText="Sign In" 
          @submit="handleLogin" 
        />
        
        <div class="mt-6 text-center text-sm">
          <p class="text-gray-400">
            Don't have an account? 
            <NuxtLink to="/signup" class="text-primary-500 hover:text-primary-400 font-medium">
              Sign up
            </NuxtLink>
          </p>
        </div>
      </div>
      
      <div v-if="authError" class="mt-4 p-3 bg-red-900/30 border border-red-800 text-red-300 rounded-lg text-sm">
        {{ authError }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const route = useRoute();
const router = useRouter();
const { login, authError } = useAuth();

function handleLogin(formData) {
  const success = login(formData.email, formData.password);
  
  if (success) {
    // Redirect to the requested page or to home
    const redirectPath = route.query.redirect || '/profile';
    router.push(redirectPath);
  }
}

definePageMeta({
  layout: 'default'
});
</script>