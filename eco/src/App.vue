<template>
  <SignupPage />
  <ForgotPasswordPage />
  <LoginPage />
  <ReportListPage />
  <GenerateReportPage />
  <ReportPage />

  <SideNavBar>
    <div class="flex flex-col w-full">
      <TopNavBar />
      <div class="grid grid-cols-12 gap-4 p-4">
        <!-- Top Section -->
        <div class="col-span-12 h-[800px]">
          <HeatMap class="w-full h-full" />
        </div>

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

        <!-- Stats Grid -->
        <div class="col-span-3 h-[180px]">
          <LocationStats label="Locations" value="Klang 96.42%" />
        </div>
        <div class="col-span-3 h-[180px]">
          <PollutionGraph class="w-full h-full" />
        </div>
        <div class="col-span-3 h-[180px]">
          <WindStatus />
        </div>

        <!-- Lower Grid 1 -->
        <div class="col-span-3 h-[160px]">
          <UVIndex />
        </div>
        <div class="col-span-3 h-[160px]">
          <PollutionBars />
        </div>
        <div class="col-span-3 h-[160px]">
          <Humidity />
        </div>
        <div class="col-span-3 h-[160px]">
          <Visibility />
        </div>

        <!-- Lower Grid 2 -->
        <div class="col-span-3 h-[160px]">
          <PollutionBars />
        </div>
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
      <UserProfile />
    </div>
  </SideNavBar>
</template>

<script setup>
import SideNavBar from './components/SideNavBar.vue'
import TopNavBar from './components/TopNavBar.vue'
import HeatMap from './components/HeatMap.vue'
import WeatherCard from './components/WeatherCard.vue'
import LocationStats from './components/LocationStats.vue'
import PollutionGraph from './components/PollutionGraph.vue'
import WindStatus from './components/WindStatus.vue'
import UVIndex from './components/UVIndex.vue'
import Humidity from './components/Humidity.vue'
import Visibility from './components/Visibility.vue'
import PollutionBars from './components/PollutionBars.vue'
import AirComposition from './components/AirComposition.vue'
import ImpressionStats from './components/ImpressionStats.vue'
import UserProfile from './components/UserProfile.vue'
import SignupPage from './components/SignupPage.vue'
import LoginPage from './components/LoginPage.vue'
import ForgotPasswordPage from './components/ForgotPassword.vue'
import ReportListPage from './components/ReportListPage.vue'
import GenerateReportPage from './components/GenerateReportPage.vue'
import ReportPage from './components/ReportPage.vue'
</script>
