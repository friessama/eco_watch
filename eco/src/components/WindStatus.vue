<template>
    <div class="bg-white shadow-xl rounded-lg p-20 text-center text-3xl justify-center items-center" style="width: 500px; height: 300px;">   
      <h2 class="font-bold mb-2">Wind Status</h2>
      <p class="">{{ speed }} km/h</p>
      <p class="text-gray-500">{{ time }}</p>
    </div>
  </template>
  
  <script setup>
  const speed = 50
  const time = '6:20 AM'
  </script>
  