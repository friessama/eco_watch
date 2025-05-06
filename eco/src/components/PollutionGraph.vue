<template>
  <div class="bg-white shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold text-gray-800 mb-2">Pollution Levels (PM2.5)</h2>

    <LineChart :chart-data="chartData" :chart-options="chartOptions" class="h-60" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

// Create a wrapper component to use in template
const LineChart = Line

// Chart data
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'PM2.5 (µg/m³)',
      data: [35, 42, 30, 50, 60, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4,
      pointRadius: 4
    }
  ]
}

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'µg/m³'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Month'
      }
    }
  }
}
</script>
