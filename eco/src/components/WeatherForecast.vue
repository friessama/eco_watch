<template>
  <div class="rounded-3xl bg-sky-200 p-6 w-80">
    <!-- Header with day and time -->
    <div class="flex justify-between items-center mb-5">
      <h2 class="text-3xl font-bold text-black">Friday</h2>
      <span class="text-xl font-medium text-black">11:45 AM</span>
    </div>

    <!-- Temperature and icon section -->
    <div class="flex justify-between items-center mb-8">
      <div class="text-7xl font-bold text-black">16°</div>
      <div class="w-24 h-24">
        <!-- Sunny cloud SVG icon -->
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Sun -->
          <circle cx="65" cy="40" r="18" fill="#FFC107" />
          <!-- Sun rays -->
          <line x1="65" y1="15" x2="65" y2="10" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="65" y1="70" x2="65" y2="65" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="42" y1="40" x2="37" y2="40" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="90" y1="40" x2="85" y2="40" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="49" y1="24" x2="45" y2="20" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="85" y1="60" x2="81" y2="56" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="49" y1="56" x2="45" y2="60" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          <line x1="85" y1="20" x2="81" y2="24" stroke="#FFC107" stroke-width="4" stroke-linecap="round" />
          
          <!-- Cloud -->
          <path d="M25,60 Q25,50 35,50 Q35,40 45,40 Q55,35 60,45 Q70,40 75,50 Q85,50 85,60 Q85,70 75,70 L35,70 Q25,70 25,60Z" fill="#FFAB40" />
          <path d="M20,65 Q20,55 30,55 Q30,45 40,45 Q50,40 55,50 Q65,45 70,55 Q80,55 80,65 Q80,75 70,75 L30,75 Q20,75 20,65Z" fill="#FFC107" />
        </svg>
      </div>
    </div>

    <!-- Weather details section -->
    <div class="space-y-2 text-black">
      <div class="mb-1">
        <span class="text-lg">Real Feel 18°</span>
      </div>
      
      <div class="flex justify-between mb-1">
        <span class="text-lg">Wind N-E. 6-7km/h</span>
        <span class="text-lg">Sunrise 5:30AM</span>
      </div>
      
      <div class="flex justify-between mb-1">
        <span class="text-lg">Pressure 100MB</span>
        <span class="text-lg">Sunset 6:45</span>
      </div>
      
      <div class="mb-1">
        <span class="text-lg">Humidity 51%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Simple static component that exactly matches the provided design
// No props or computed values needed as this is an exact replica
</script>

<style scoped>
/* Extra styling to match the design exactly */
</style>