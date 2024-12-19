<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'



</script>

<template>
  <div>
    <a href="#" target="_blank">
      <img src="/4FDAF710C8AC9A3FE297CD559EE5E9A4.jpg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="请选择要测算的生辰时间（阳历时间精确到小时）" />
</template>

<style scoped>
.logo {
  height: 15em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
