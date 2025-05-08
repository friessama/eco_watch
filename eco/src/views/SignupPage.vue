<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white rounded-3xl shadow-lg flex w-[950px] overflow-hidden">
  
        <!-- Left Side: How it works -->
        <div class="w-1/2 bg-purple-600 text-white p-10 flex flex-col justify-center space-y-6">
          <h2 class="text-2xl font-bold">How it works?</h2>
  
          <div class="flex items-start gap-3">
            <img src="https://www.svgrepo.com/show/485545/user.svg" alt="Join" class="w-6 h-6" />
            <p>Join us</p>
          </div>
  
          <div class="flex items-start gap-3">
            <img src="https://www.svgrepo.com/show/522042/search-status.svg" alt="Search" class="w-6 h-6" />
            <p>Bring your own talent pool or let us match your posts with the best ones</p>
          </div>
  
          <div class="flex items-start gap-3">
            <img src=".\assets\phone-call.png" alt="Call" class="w-6 h-6" />
            <p>Get in touch with talents with just a few clicks—no cold calls or emails</p>
          </div>
        </div>
  
        <!-- Right Side: Sign Up form -->
        <div class="w-1/2 p-10 flex flex-col justify-center">
          <h2 class="text-2xl font-bold mb-6">Sign Up</h2>
  
          <form @submit.prevent="handleSignup" class="space-y-4">
            <input
              type="text"
              v-model="name"
              placeholder="Name"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              v-model="email"
              placeholder="E-mail Address"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              v-model="company"
              placeholder="Company"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
  
            <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
              Sign up
            </button>
  
            <button
              type="button"
              class="w-full bg-purple-100 text-purple-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-purple-200"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="w-5 h-5" />
              Sign up with Google
            </button>
          </form>
  
          <p class="text-sm text-center mt-6">
            I have an account.
            <a href="#" class="text-purple-600 hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const company = ref('')
  
  function handleSignup() {
    console.log('Signing up:', {
      name: name.value,
      email: email.value,
      password: password.value,
      company: company.value
    })
    // Add real sign-up logic here
  }
  </script>
  