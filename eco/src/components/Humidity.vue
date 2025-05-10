<template>
    <div class="bg-white shadow-xl rounded-lg p-20 text-center text-3xl justify-center items-center" style="width: 500px; height: 300px;">
      <h2 class="font-bold mb-2">Humidity</h2>
      <p class="">{{ humidity }}%</p>
      <p class="text-gray-500">Dew point is 22°C</p>
    </div>
  </template>
  
  <script setup>
  const humidity = 84
  </script>
  