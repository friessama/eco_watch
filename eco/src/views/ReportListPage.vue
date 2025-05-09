<template>
  <SideNavBar>
    <div class="p-6">
      <h1 class="text-2xl font-semibold text-purple-700 mb-4">Report Lists</h1>
  
      <div class="relative mb-6">
        <input
          v-model="search"
          type="text"
          placeholder="Search anything here..."
          class="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <svg
          class="absolute left-3 top-3 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 101.5 9a7.5 7.5 0 0015 0z"
          />
        </svg>
      </div>
  
      <div class="overflow-x-auto">
        <table class="w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead class="bg-purple-100 text-left">
            <tr>
              <th class="p-3">No.</th>
              <th class="p-3">Reports</th>
              <th class="p-3">Status</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(report, index) in filteredReports"
              :key="index"
              class="border-b hover:bg-gray-50"
            >
              <td class="p-3">{{ index + 1 }}</td>
              <td class="p-3">{{ report.title }}</td>
              <td class="p-3">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-white text-sm',
                    report.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'
                  ]"
                >
                  {{ report.status }}
                </span>
              </td>
              <td class="p-3 text-center space-x-3">
                <button title="Edit">
                  ✏️
                </button>
                <button title="Delete">
                  ❌
                </button>
                <button title="Download">
                  ⬇️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="mt-6 flex justify-center">
        <button
    class="bg-purple-600 text-white rounded-full w-14 h-14 shadow-md hover:bg-purple-700 flex items-center justify-center text-xl"
    title="Add New Report"
  >
    <i class="pi pi-plus text-4xl">+</i>
  </button>
      </div>
    </div>
  </SideNavBar>
  </template>
  
  <script setup>
  import SideNavBar from '../components/SideNavBar.vue'
  import { ref, computed } from 'vue'
  
  const search = ref('')
  const reports = ref([
    {
      title: 'Illegal Dumping Detection Report – Sungai Klang Sector A – 05 May 2025',
      status: 'Approved'
    },
    {
      title: 'Waste Watch Report – Community Alerts & AI Insights – Klang Valley – May 2025',
      status: 'On Going'
    },
    {
      title: 'Predicted Dumping Hotspots – Landfill Proximity Analysis – Q2 2025',
      status: 'Approved'
    },
    {
      title: 'Enforcement Alert – Predicted Dumping Clusters – Klang Industrial Belt',
      status: 'On Going'
    }
  ])
  
  const filteredReports = computed(() => {
    if (!search.value.trim()) return reports.value
    return reports.value.filter(report =>
      report.title.toLowerCase().includes(search.value.toLowerCase())
    )
  })
  </script>
  
  <style scoped>
  table {
    border-radius: 12px;
    overflow: hidden;
  }
  </style>
  