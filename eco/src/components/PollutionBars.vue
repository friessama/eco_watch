<template>
  <div class="bg-white shadow-xl rounded-lg p-4 text-3xl" style="width: 500px; height: 300px;"> 
    <h2 class="font-bold mb-2">Pollution</h2>
    <BarChart :chart-data="chartData" :chart-options="chartOptions" class="h-32" />
    <div class="flex justify-around text-3xl text-gray-500 mt-2">
      <span>Air</span><span>Water</span><span>Smell</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const BarChart = Bar

const chartData = ref({
  labels: ['All', 'Men', 'Women'],
  datasets: [
    {
      label: 'Pollution Levels',
      data: [65, 59, 80],
      backgroundColor: ['#60a5fa', '#34d399', '#f87171'],
    },
  ],
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
})
</script>

<style scoped>
/* Optional: adjust chart height */
</style>
