<template>
    <div class="bg-white shadow rounded-lg p-4 text-center">
      <h2 class="font-bold mb-2">Wind Status</h2>
      <p class="text-2xl">{{ speed }} km/h</p>
      <p class="text-sm text-gray-500">{{ time }}</p>
    </div>
  </template>
  
  <script setup>
  const speed = 50
  const time = '6:20 AM'
  </script>
  