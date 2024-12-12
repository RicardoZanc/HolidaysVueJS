<template>

<header>
    <nav class="bg-black">
    <div class="max-w-screen-xl flex mx-auto p-4">
      <RouterLink to="/" class="self-center text-2xl font-semibold text-white">HolidaySearch</RouterLink>
    </div>
    </nav>
  </header>
  <main class="flex items-center justify-center w-full">
    <section class="grid w-full h-full place-items-center content-center p-12">
      <RouterView />
    </section>
  </main>
</template>

<script setup>
  import { RouterView, RouterLink } from 'vue-router';
</script>