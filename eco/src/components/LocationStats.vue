<template>
  <div class="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
    <!-- Icon -->
    <div class="bg-blue-100 text-blue-500 rounded-full p-2">
      <img :src="icon" :alt="label" class="w-6 h-6" />
    </div>

    <!-- Info -->
    <div>
      <h3 class="text-sm text-gray-500">{{ label }}</h3>
      <p class="text-lg font-semibold text-gray-800">{{ value }} {{ unit }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,      // e.g., "Air Quality"
  value: [String, Number],  // e.g., 75
  unit: String,       // e.g., "AQI"
  icon: String        // image URL or path
})
</script>
