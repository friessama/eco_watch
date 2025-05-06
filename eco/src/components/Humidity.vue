<template>
    <div class="bg-white shadow rounded-lg p-4 text-center">
      <h2 class="font-bold mb-2">Humidity</h2>
      <p class="text-2xl">{{ humidity }}%</p>
      <p class="text-sm text-gray-500">Dew point is 22°C</p>
    </div>
  </template>
  
  <script setup>
  const humidity = 84
  </script>
  