<template>
  <div v-for="dispenser in dispensers" :key="dispenser.id">
    <Link :href="`/dispenser/${dispenser.id}`">
      <DispenserInfos :dispenser="dispenser" />
    </Link>
  </div>
</template>

<script setup>
import {Link} from '@inertiajs/inertia-vue3';
import DispenserInfos from '@/Components/DispenserInfos.vue';

  defineProps({
    dispensers: Array,
  });
</script>