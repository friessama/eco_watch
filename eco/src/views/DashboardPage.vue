<!-- views/DashboardPage.vue -->
<template>
    <SideNavBar>
      <div class="flex flex-col w-full">
        <TopNavBar />
        <div class="grid grid-cols-12 gap-4 p-4">
          <!-- Dashboard content -->
          <div class="col-span-12 h-[800px]">
            <HeatMap class="w-full h-full" />
          </div>
          <!-- Weather Forecast -->
          <div class="col-span-12 flex justify-between items-center space-x-4 overflow-x-auto py-2">
            <WeatherCard day="Fri" temperature="16" condition="sunny" icon="https://openweathermap.org/img/wn/01d@2x.png" />
            <!-- ... other days ... -->
          </div>
          <!-- Stats Grid -->
          <div class="col-span-3 h-[180px]"><LocationStats label="Locations" value="Klang 96.42%" /></div>
          <div class="col-span-3 h-[180px]"><PollutionGraph class="w-full h-full" /></div>
          <div class="col-span-3 h-[180px]"><WindStatus /></div>
          <div class="col-span-3 h-[160px]"><UVIndex /></div>
          <div class="col-span-3 h-[160px]"><PollutionBars /></div>
          <div class="col-span-3 h-[160px]"><Humidity /></div>
          <div class="col-span-3 h-[160px]"><Visibility /></div>
          <div class="col-span-3 h-[160px]"><PollutionBars /></div>
          <div class="col-span-3 h-[160px]"><AirComposition /></div>
          <div class="col-span-3 h-[160px]"><ImpressionStats /></div>
          <div class="col-span-3 h-[160px]"><AirComposition /></div>
        </div>
        <UserProfile />
      </div>
    </SideNavBar>
  </template>
  
  <script setup>
  import SideNavBar from '../components/SideNavBar.vue'
  import TopNavBar from '../components/TopNavBar.vue'
  import HeatMap from '../components/HeatMap.vue'
  import WeatherCard from '../components/WeatherCard.vue'
  import LocationStats from '../components/LocationStats.vue'
  import PollutionGraph from '../components/PollutionGraph.vue'
  import WindStatus from '../components/WindStatus.vue'
  import UVIndex from '../components/UVIndex.vue'
  import Humidity from '../components/Humidity.vue'
  import Visibility from '../components/Visibility.vue'
  import PollutionBars from '../components/PollutionBars.vue'
  import AirComposition from '../components/AirComposition.vue'
  import ImpressionStats from '../components/ImpressionStats.vue'
  import UserProfile from '../components/UserProfile.vue'
  </script>
  