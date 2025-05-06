<template>
  <div class="bg-white shadow rounded-lg px-4 py-6 text-center w-34">
    <!-- Weather Icon from URL -->
    <img
      :src="icon"
      :alt="condition"
      class="w-5 h-5 mx-auto mb-2"
    />
    <!-- Day -->
    <h2 class="text-sm font-semibold text-gray-700 mb-1">{{ day }}</h2>

    <!-- Temperature -->
    <p class="text-lg font-bold text-gray-900">{{ temperature }}°</p>

    <!-- Condition -->
    <p class="text-xs text-gray-500 capitalize">{{ condition }}</p>
  </div>
</template>

<script setup>
defineProps({
  day: String,
  temperature: Number,
  condition: String,
  icon: String  // expects a full image URL
})
</script>
