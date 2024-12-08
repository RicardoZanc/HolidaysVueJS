<template>

<header>
    <nav class="bg-black">
    <div class="max-w-screen-xl flex mx-auto p-4">
      <h1 class="self-center text-2xl font-semibold whitespace-nowra text-white">HolidaySearch</h1>
    </div>
    </nav>
  </header>
  <main class="w-full h-full d-flex flex grow items-center justify-center ">
    <SearchCard/>
  </main>
</template>

  <script setup>
  import SearchCard from "@/components/SearchCard.vue"
  </script>