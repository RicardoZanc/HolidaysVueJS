<template>
    <div class="w-full">
        <div class="bg-black rounded-t px-6 py-4">
            <h1 class="text-center self-center text-2xl font-semibold text-white">{{ props.holiday.date }}</h1>
        </div>
        <div class="flex items-center justify-center h-72 bg-white rounded-b">
            <h1 class="text-center self-center text-2xl font-semibold">{{ props.holiday.name }}</h1>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['holiday'])
</script>