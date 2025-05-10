<template>
  <SideNavBar>
    <div class="flex flex-col w-full min-h-screen">
      <!-- Top Nav -->
      <TopNavBar class="p-4 w-full" />

      <div class="flex flex-col flex-1 p-4 space-y-4">
        <!-- Heatmap Section (full width) -->
        <div class="w-full h-[800px]">
          <HeatMap class="w-full h-full" />
        </div>

        <!-- Weather Forecast (scrollable row) -->
        <div class="w-full overflow-x-auto flex -space-x-4 gap-40 justify-center items-center">
          <WeatherCard v-for="day in days" :key="day.day" v-bind="day" />
        </div>

        <!-- Main Stats & Graphs -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-40">
          <LocationStats class="" />
          <PollutionGraph class="" />
        </div>

        <!-- Wind, UV, Pollution -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <WindStatus class="w-full" />
          <UVIndex class="w-full" />
          <PollutionBars class="w-full" />
        </div>

        <!-- Humidity, Visibility, Additional Pollution -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Humidity class="w-full" />
          <Visibility class="w-full" />
          <PollutionBars class="w-full" />
        </div>

        <!-- Air Composition & Impressions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AirComposition class="w-full" />
          <ImpressionStats class="w-full" />
          <AirComposition class="w-full" />
        </div>

        <!-- User Profile -->
        <div class="w-full">
          <UserProfile />
        </div>
      </div>
    </div>
  </SideNavBar>
</template>

<script setup>
import SideNavBar from '../components/SideNavBar.vue';
import TopNavBar from '../components/TopNavBar.vue';
import HeatMap from '../components/HeatMap.vue';
import WeatherCard from '../components/WeatherCard.vue';
import LocationStats from '../components/LocationStats.vue';
import PollutionGraph from '../components/PollutionGraph.vue';
import WindStatus from '../components/WindStatus.vue';
import UVIndex from '../components/UVIndex.vue';
import Humidity from '../components/Humidity.vue';
import Visibility from '../components/Visibility.vue';
import PollutionBars from '../components/PollutionBars.vue';
import AirComposition from '../components/AirComposition.vue';
import ImpressionStats from '../components/ImpressionStats.vue';
import UserProfile from '../components/UserProfile.vue';

const days = [
  { day: 'Fri', temperature: '16', condition: 'sunny', icon: 'https://openweathermap.org/img/wn/01d@2x.png' },
  { day: 'Sat', temperature: '10', condition: 'rain', icon: 'https://openweathermap.org/img/wn/10d@2x.png' },
  { day: 'Sun', temperature: '15', condition: 'cloudy', icon: 'https://openweathermap.org/img/wn/03d@2x.png' },
  { day: 'Mon', temperature: '11', condition: 'snow', icon: 'https://openweathermap.org/img/wn/13d@2x.png' },
  { day: 'Tue', temperature: '10', condition: 'rain', icon: 'https://openweathermap.org/img/wn/10d@2x.png' },
  { day: 'Wed', temperature: '12', condition: 'snow', icon: 'https://openweathermap.org/img/wn/13d@2x.png' },
  { day: 'Thu', temperature: '10', condition: 'cloudy', icon: 'https://openweathermap.org/img/wn/04d@2x.png' },
];
</script>

<style scoped>
/* Optional: add background color or fine-tuning here */
</style>
