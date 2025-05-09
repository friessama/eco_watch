<template>
  <div class="bg-white shadow-xl rounded-lg p-20 text-center text-3xl justify-center items-center" style="width: 500px; height: 300px;">
    <h2 class="font-bold mb-2">UV Index</h2>
    <p class="">{{ uv }} UV</p>
  </div>
</template>

<script setup>
const uv = 5.5
</script>