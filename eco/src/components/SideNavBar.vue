<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="w-64 bg-white text-purple-600 flex flex-col">
        <div class="p-4 text-2xl font-bold border-b border-gray-700">
          EcoWatch
        </div>
        <nav class="flex-1 p-4 space-y-2">
          <a href="#" class="block px-3 py-2 rounded hover:bg-purple-300">Dashboard</a>
          <a href="#" class="block px-3 py-2 rounded hover:bg-purple-300">Analytics</a>
          <a href="#" class="block px-3 py-2 rounded hover:bg-purple-300">Reports</a>
          <a href="#" class="block px-3 py-2 rounded hover:bg-purple-300">Settings</a>
        </nav>
        <div class="p-4 border-t border-purple-600">
          <a href="#" class="block px-3 py-2 rounded hover:bg-gray-200">Logout</a>
        </div>
      </div>
  
      <!-- Main content -->
      <div class="flex-1 p-8 bg-gray-100 overflow-auto">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed unless you want dynamic behavior
  </script>
  
  <style scoped>
  /* optional additional styling */
  </style>
  