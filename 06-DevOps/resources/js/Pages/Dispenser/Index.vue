<template>
  <MainLayout>
    <div v-for="dispenser in dispensers" :key="dispenser.id">
      <Link :href="`/dispenser/${dispenser.id}`">
        <DispenserInfos :dispenser="dispenser" />
      </Link>
    </div>
  </MainLayout>
</template>

<script setup>
import {Link} from '@inertiajs/inertia-vue3';
import DispenserInfos from '@/Components/DispenserInfos.vue';
import MainLayout from '../../Layouts/MainLayout.vue';

  defineProps({
    dispensers: Array,
  });
</script>