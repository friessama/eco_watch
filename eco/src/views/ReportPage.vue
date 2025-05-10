<template>
  <SideNavBar>
    <div class="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-start">
      <div class="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-md text-center">
        <h1 class="text-2xl md:text-3xl font-bold text-black mb-6">
          Illegal Dumping Report – {{ location }} Sector B – {{ formattedDate }}
        </h1>
  
        <hr class="border-t-4 border-dashed border-gray-400 mb-6" />
  
        <div class="text-left text-black font-semibold text-base space-y-2">
          <p>LOCATION : {{ location }}</p>
          <p>COORDINATE : {{ coordinate }}</p>
          <p>STATUS : {{ status }}</p>
          <p>ACTION NEEDED : {{ action }}</p>
        </div>
  
        <div class="mt-6 text-left text-gray-700 text-sm">
          <p><em>details?</em></p>
          <!-- Additional detail content can go here -->
        </div>
  
        <hr class="border-t-4 border-dashed border-gray-400 my-8" />
  
        <button
          @click="downloadReport"
          class="bg-purple-700 text-white px-6 py-2 rounded-md shadow hover:bg-purple-800 transition"
        >
          Download
        </button>
      </div>
    </div>
  </SideNavBar>
  </template>
  
  <script setup>
  import SideNavBar from '../components/SideNavBar.vue'
  import { ref, computed } from 'vue'
  
  // Sample data (this would likely come from props or an API)
  const location = ref('Sungai Klang')
  const coordinate = ref("40° N 30° W")
  const status = ref("POSSIBLE ILLEGAL DUMPING")
  const action = ref("ASSIGN CLEANUP TASK")
  const date = ref(new Date('2025-05-05'))
  
  const formattedDate = computed(() =>
    date.value.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  )
  
  function downloadReport() {
    alert('Downloading report...') // Replace with actual download logic
  }
  </script>
  
  <style scoped>
  /* Additional styling (optional) */
  </style>
  