<template>
  <div style="display: flex;flex-direction: row; align-items: center; gap: 1vw;">
      <p>{{ dispenser.name }}</p>
      <p>{{ dispenser.location }}</p>
      <button style="height: fit-content;">{{ dispenser.status }}</button>
  </div>
</template>   

<script setup>
  defineProps({
    dispenser: Object,
  });
</script>