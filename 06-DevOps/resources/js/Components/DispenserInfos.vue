<template>
  <div class="shadow-[0px_0px_20px_0px_rgba(229,231,235,0.3)] rounded-lg transition-all duration-500 bg-white p-6 flex flex-col justify-between w-full lg:h-[17vh] h-[20vh] hover:shadow-[0px_0px_20px_0px_rgba(229,231,235,0.5)]" :class="{'border-gray-200  border duration-100' : active }">
    <div class="flex flex-row justify-between items-center">
      <p class="font-semibold">{{ dispenser.name }}</p>
      <button :class="statusClass" class="text-[#0311a5] border-[1.5px] rounded-md px-5 py-1 uppercase font-semibold border-[#0311a5]">{{ dispenser.status }}</button>
    </div>
      <p class="flex flex-row gap-4 items-center"><img class="w-4 h-fit" src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png" alt="location">{{ dispenser.location }}</p>
  </div>
</template>   

<script setup>
  import { defineProps, computed } from 'vue';
  
  // Define props
  const props = defineProps({
    dispenser: Object,
  });

  // Use props.dispenser to access the dispenser object
  const statusClass = computed(() => {
    switch (props.dispenser.status.toLowerCase()) {
      case 'active':
        return ' text-green-500 border-green-500';
      case 'inactive':
        return ' text-red-500 border-red-500';
      case 'pending':
        return ' text-yellow-500 border-yellow-500';
    }
  });
</script
