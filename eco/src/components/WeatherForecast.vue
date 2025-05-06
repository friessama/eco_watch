<template>
    <div class="flex gap-2 overflow-x-auto">
      <WeatherCard v-for="(w, index) in forecast" :key="index" :day="w.day" :temperature="w.temp" :condition="w.condition" />
    </div>
  </template>
  
  <script setup>
  import WeatherCard from './WeatherCard.vue'
  
  const forecast = [
    { day: 'Fri', temp: 16, condition: 'Sunny' },
    { day: 'Sat', temp: 10, condition: 'Rainy' },
    { day: 'Sun', temp: 15, condition: 'Cloudy' },
    { day: 'Mon', temp: 11, condition: 'Stormy' },
    { day: 'Tue', temp: 10, condition: 'Snow' },
    { day: 'Wed', temp: 12, condition: 'Rain' },
    { day: 'Thu', temp: 10, condition: 'Windy' }
  ]
  </script>
  