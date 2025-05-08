<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white rounded-3xl shadow-lg flex w-[900px] overflow-hidden">
  
        <!-- Left side - Login form -->
        <div class="w-1/2 p-10 flex flex-col justify-center">
          <h2 class="text-2xl font-bold mb-6">Login</h2>
  
          <form @submit.prevent="handleLogin" class="space-y-5">
            <div>
              <label class="block text-sm mb-1">Email</label>
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
  
            <div>
              <label class="block text-sm mb-1">Password</label>
              <input
                type="password"
                v-model="password"
                placeholder="••••••••••••"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <div class="text-right mt-1">
                <a href="#" class="text-sm text-purple-600 hover:underline">Forgot password</a>
              </div>
            </div>
  
            <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
              Sign in
            </button>
  
            <button type="button" class="w-full border flex items-center justify-center gap-2 py-2 rounded-md">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="w-5 h-5" />
              Sign in with Google
            </button>
          </form>
  
          <p class="text-sm text-center mt-6">
            Don’t have an account?
            <a href="#" class="text-purple-600 hover:underline">Sign up</a>
          </p>
        </div>
  
        <!-- Right side - Image and text -->
        <div class="w-1/2 bg-purple-600 text-white p-10 flex flex-col items-center justify-center">
          <p class="text-2xl font-semibold text-center mb-4">
            Very good works are <br /> waiting for you<br />
            <span class="font-bold">Sign up Now</span>
          </p>
          <img
            src="https://i.ibb.co/4VZJmzP/login-illustration.png"
            alt="Illustration"
            class="max-h-72 object-contain"
          />
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  function handleLogin() {
    console.log('Logging in with:', email.value, password.value)
    // Add login logic here
  }
  </script>
  