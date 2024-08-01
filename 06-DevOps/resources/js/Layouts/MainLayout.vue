<template>
  <div class="min-h-screen bg-[#f9f9f7] pb-8 w-full">
    <nav class="flex flex-row justify-between lg:px-12 px-8 py-4 border-b-[1.5px] border-gray-200 bg-white w-full top-0 fixed">
      <div class="menu flex flex-row gap-2 items-center">
        <Link href="/"><img class="w-10 mr-8 h-fit" src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/e1/Logo_Picard_surgel%C3%A9s.png/1260px-Logo_Picard_surgel%C3%A9s.png?20170717143342" alt="logo picard"></Link>&nbsp;
        
        <Link class="text-[#0311a3] font-semibold hover:underline" href="/">Home Page</Link>&nbsp;
        <Link class="text-[#0311a3] font-semibold hover:underline" href="/create">Create Page</Link>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script setup>
  import {computed} from 'vue';
  import { Link } from '@inertiajs/vue3';

</script>

<style>
</style>