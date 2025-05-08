<template>
  <div class="bg-white shadow-xl rounded-2xl p-8 w-300 max-w-4xl mx-auto h-[500px] overflow-y-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Location Statistics</h2>
    <div class="grid grid-cols-1 gap-4">
      <div
        v-for="location in locations"
        :key="location.label"
        class="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
      >
        <div class="flex items-center space-x-4">
          <!-- Icon -->
          <div class="rounded-full p-3 flex items-center justify-center bg-blue-100">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16M9 10l-4.553 2.276a1 1 0 000 1.448L9 16m6 4v-4M9 20v-4M12 4v4m0 0l-4 4m4-4l4 4" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-700">{{ location.label }}</h3>
            <p class="text-sm text-gray-500">Location Coverage</p>
          </div>
        </div>
        <div>
          <p class="text-2xl font-bold text-gray-900">{{ location.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const locations = [
  { label: 'Klang', value: '96.42%' },
  { label: 'Shah Alam', value: '88.10%' },
  { label: 'Petaling Jaya', value: '82.75%' },
  { label: 'Subang', value: '79.60%' },
  { label: 'Puchong', value: '75.20%' },
  { label: 'Kajang', value: '73.90%' },
  { label: 'Serdang', value: '71.50%' },
  { label: 'Cyberjaya', value: '69.80%' },
  { label: 'Putrajaya', value: '68.40%' },
  { label: 'Bangi', value: '66.90%' },
];
</script>

<style scoped>
/* Smooth scrolling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
</style>
