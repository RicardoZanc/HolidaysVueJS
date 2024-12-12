<template>


    <div class="w-full">
        <div class="bg-black rounded-t px-6 py-4">
            <h1 class="text-center self-center text-2xl font-semibold text-white">Pesquisar ano</h1>
        </div>
        <div class="flex items-center justify-center h-72  bg-white rounded-b">
            <input class="p-2 rounded border-2 border-gray-500" v-model="year" placeholder="Digite aqui o ano"> 
            <button class="bg-black text-white text-lg font-bold rounded p-2">
            <RouterLink :to="'/year/'+year">
                Pesquisar
            </RouterLink> 
            </button>       
        </div>
    </div>
    
    </template>
    
    <script setup>
        import {ref} from 'vue';

        const year = ref("");
    </script>