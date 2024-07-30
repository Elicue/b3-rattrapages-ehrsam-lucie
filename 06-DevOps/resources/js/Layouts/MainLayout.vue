<template>
  <div>
    
    <Link href="/">Home Page</Link>&nbsp;
    <Link href="/create">Create Page</Link>
    <!-- <div v-if="flashSuccess" class="success">
      {{ flashSuccess }}
    </div> -->

    <slot></slot>
  </div>
</template>

<script setup>
  import {computed} from 'vue';
  import { Link, usePage } from '@inertiajs/inertia-vue3';

  const page = usePage();
  const flashSuccess = computed(() => page.props.value.flash.success);
</script>

<style>
  .success {
    background-color: green;
    color: white;
  }
</style>