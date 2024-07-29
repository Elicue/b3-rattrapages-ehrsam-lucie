<template>
  <div>
    <DispenserInfos :dispenser="dispenser" />
  </div>
</template>

<script setup>
  import DispenserInfos from '@/Components/DispenserInfos.vue';

  defineProps({
    dispenser: Object,
  });
</script>