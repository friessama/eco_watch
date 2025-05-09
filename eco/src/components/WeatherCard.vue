<template>
  <div class="bg-white shadow-xl m-6 rounded-4xl px-4 py-10 text-center w-60">
    <!-- Weather Icon from URL -->
    <img
      :src="icon"
      :alt="condition"
      class="w-20 h-20 mx-auto mb-2"
    />
    <!-- Day -->
    <h2 class="text-4xl font-semibold text-gray-700 mb-1">{{ day }}</h2>

    <!-- Temperature -->
    <p class="text-3xl font-bold text-gray-900">{{ temperature }}°</p>

    <!-- Condition -->
    <p class="text-3xl text-gray-500 capitalize">{{ condition }}</p>
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
