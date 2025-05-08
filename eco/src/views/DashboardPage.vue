<template>
  <SideNavBar>
    <div class="flex flex-col w-full">
      <TopNavBar class="m-8"/>
        <!-- Heatmap Section -->
        <div class="col-span-12 h-[800px] m-4">
          <HeatMap class="w-full h-full" />
        </div>
      <div class="grid grid-cols-12 gap-4 p-4">
        <!-- Weather Forecast -->
        <div class="col-span-12 flex justify-between items-center space-x-4 overflow-x-auto py-2">
          <WeatherCard day="Fri" temperature="16" condition="sunny" icon="https://openweathermap.org/img/wn/01d@2x.png" />
          <WeatherCard day="Sat" temperature="10" condition="rain" icon="https://openweathermap.org/img/wn/10d@2x.png" />
          <WeatherCard day="Sun" temperature="15" condition="cloudy" icon="https://openweathermap.org/img/wn/03d@2x.png" />
          <WeatherCard day="Mon" temperature="11" condition="snow" icon="https://openweathermap.org/img/wn/13d@2x.png" />
          <WeatherCard day="Tue" temperature="10" condition="rain" icon="https://openweathermap.org/img/wn/10d@2x.png" />
          <WeatherCard day="Wed" temperature="12" condition="snow" icon="https://openweathermap.org/img/wn/13d@2x.png" />
          <WeatherCard day="Thu" temperature="10" condition="cloudy" icon="https://openweathermap.org/img/wn/04d@2x.png" />
        </div>

        <div class="flex flex-row col-span-12 gap-8 justify-center items-center m-10">
          <div class="">
            <LocationStats />
          </div>
          <div class="">
            <PollutionGraph class="w-full h-full" />
          </div>
        </div>

        <div class="flex flex-row col-span-12 gap-4 justify-center items-center m-10">
          <div class="col-span-3">
            <WindStatus />
          </div>
          <div class="col-span-3">
            <UVIndex />
          </div>
          <div class="col-span-3">
            <PollutionBars />
          </div>
        </div>

        <div class="flex flex-row col-span-12 gap-4 justify-center items-center m-10">
          <div class="col-span-3 h-[160px]">
            <Humidity />
          </div>
          <div class="col-span-3 h-[160px]">
            <Visibility />
          </div>
          <div class="col-span-3 h-[160px]">
            <PollutionBars />
          </div>
        </div>

        <div class="flex flex-row col-span-12 gap-4 justify-center items-center m-10 py-20">
          <div class="col-span-3 h-[160px]">
            <AirComposition />
          </div>
          <div class="col-span-3 h-[160px]">
            <ImpressionStats />
          </div>
          <div class="col-span-3 h-[160px]">
            <AirComposition />
          </div>
        </div>
      </div>
      <UserProfile />
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
</script>

<style scoped>
/* Optional: custom styles */
</style>
