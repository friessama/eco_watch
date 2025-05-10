<template>
  <SideNavBar>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-10 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 class="text-2xl font-semibold text-purple-700 mb-8">Generate Reports</h1>
  
        <div class="text-left mb-6">
          <label for="location" class="block text-lg font-semibold text-purple-700 mb-2">Location</label>
          <select
            id="location"
            v-model="selectedLocation"
            class="w-full border border-gray-300 rounded-md p-2"
          >
            <option disabled value="">Selected Option</option>
            <option v-for="location in locations" :key="location" :value="location">
              {{ location }}
            </option>
          </select>
        </div>
  
        <div class="text-left mb-8">
          <label for="date" class="block text-lg font-semibold text-purple-700 mb-2">Date</label>
          <input
            id="date"
            type="date"
            v-model="selectedDate"
            class="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
  
        <button
          @click="generateReport"
          class="bg-purple-700 text-white text-lg font-medium py-2 px-6 rounded-xl shadow hover:bg-purple-800 transition"
        >
          Generate Report
        </button>
      </div>
    </div>
  </SideNavBar>
  </template>
  
  <script setup>
  import SideNavBar from '../components/SideNavBar.vue'
  import { ref } from 'vue'
  
  const selectedLocation = ref('')
  const selectedDate = ref('')
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston'] // sample options
  
  function generateReport() {
    if (!selectedLocation.value || !selectedDate.value) {
      alert('Please select a location and date.')
      return
    }
    // Placeholder logic for generating the report
    alert(`Generating report for ${selectedLocation.value} on ${selectedDate.value}`)
  }
  </script>
  
  <style scoped>
  /* Optional: add custom styles here */
  </style>
  