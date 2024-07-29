<template>
  <div>
    
    <Link href="/">Home Page</Link>&nbsp;
    <Link href="/create">Create Page</Link>

    <slot></slot>
  </div>
</template>

<script setup>
  import { Link } from '@inertiajs/inertia-vue3';
</script>