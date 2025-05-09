<template>
  <div class="bg-white shadow-xl rounded-lg p-4">
    <h2 class="text-4xl font-semibold text-gray-800 mb-2">Pollution Levels (PM2.5)</h2>
    <p class="text-sm text-gray-500 mb-4">Last 12 months data</p>

    <LineChart :chart-data="chartData" :chart-options="chartOptions" class="h-140" />
    
    <div class="mt-4 text-xl text-gray-500 flex justify-between">
      <span>Good: 0-12</span>
      <span>Moderate: 12-35</span>
      <span>Unhealthy: 35-55</span>
      <span>Very Unhealthy: 55+</span>
    </div>
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

// Generate more realistic fake data with seasonal patterns
const generatePollutionData = () => {
  const baseValues = [22, 25, 18, 15, 20, 35, 45, 50, 42, 30, 28, 35]
  return baseValues.map(value => {
    // Add some random variation
    const variation = Math.random() * 10 - 5 // Random value between -5 and +5
    // Ensure we don't go below 0
    return Math.max(0, Math.round(value + variation))
  })
}

// Chart data
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'PM2.5 (µg/m³)',
      data: generatePollutionData(),
      borderColor: 'rgba(220, 38, 38, 1)', // More alarming red color
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      fill: true,
      tension: 0.3,
      pointRadius: 4,
      borderWidth: 2
    }
  ]
}

// Chart options with more detailed configuration
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12,
        padding: 20
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          label += context.parsed.y + ' µg/m³';
          
          // Add air quality info
          const value = context.parsed.y;
          if (value < 12) {
            label += ' (Good)';
          } else if (value < 35) {
            label += ' (Moderate)';
          } else if (value < 55) {
            label += ' (Unhealthy)';
          } else {
            label += ' (Very Unhealthy)';
          }
          
          return label;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'µg/m³'
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      // Add reference lines for air quality levels
      ticks: {
        callback: function(value) {
          if (value === 12) return '12 (Good)';
          if (value === 35) return '35 (Mod)';
          if (value === 55) return '55 (Unhealthy)';
          return value;
        }
      }
    },
    x: {
      title: {
        display: true,
        text: 'Month'
      },
      grid: {
        display: false
      }
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  }
}
</script>

<style scoped>
/* Add some custom styling */
.bg-white {
  background-color: #fff;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>