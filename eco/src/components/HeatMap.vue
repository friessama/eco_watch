<template>
    <div class="relative w-full rounded-lg overflow-hidden shadow">
      <!-- Map image or interactive map here -->
      <img
        src="../assets/heatmap.png"
        alt="Heat Map of Sungai Klang"
        class="w-full h-full object-cover"
      />
  
      <!-- Map overlay title -->
      <div class="absolute top-10 left-10 bg-white bg-opacity-70 text-3xl text-gray-700 px-3 py-1 rounded shadow">
        Heat Map of Sungai Klang
      </div>
  
      <!-- Legend (right side color scale) -->
      <div class="absolute top-10 right-10 flex flex-col items-center">
        <div
          class="w-15 h-130 bg-gradient-to-b from-red-500 via-yellow-300 to-green-500 rounded"
        ></div>
        <div class="text-[30px] text-gray-500 mt-1">
          <div>High</div>
          <div>Low</div>
        </div>
      </div>
  
      <!-- Zoom controls (optional) -->
      <div class="absolute top-10 right-10 flex flex-col gap-1 mr-20">
        <button class="bg-white text-gray-700 w-20 h-20 rounded shadow text-sm">+</button>
        <button class="bg-white text-gray-700 w-20 h-20 rounded shadow text-sm">-</button>
      </div>
    </div>
  </template>
  