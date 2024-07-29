<template>
  <div v-for="dispenser in dispensers">
    {{ dispenser.name }} 
  </div>
</template>

<script setup>
  import MainLayout from '../../Layouts/MainLayout.vue';

  defineProps({
    dispensers: Array
  });
</script>