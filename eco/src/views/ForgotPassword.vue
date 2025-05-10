<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-10 rounded-3xl shadow-md w-full max-w-md text-center">
        <h2 class="text-2xl font-semibold mb-2">Forgot password?</h2>
        <p class="text-gray-500 text-sm mb-6">No worries, we'll send you reset instruction.</p>
  
        <form @submit.prevent="handleReset">
          <div class="mb-4 text-left">
            <label class="text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Reset Password
          </button>
        </form>
  
        <router-link to="/login" class="block mt-4 text-sm text-purple-600 hover:underline">
          Back to login
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  
  function handleReset() {
    console.log('Password reset requested for:', email.value)
    // Integrate your password reset logic here (e.g., call API)
  }
  </script>
  