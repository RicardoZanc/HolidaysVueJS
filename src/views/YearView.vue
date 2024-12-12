<template>
    <div class="w-full grid gap-4 grid-cols-2">
        <template v-for="holiday in holidays">
            <HolidaysComponent :holiday="holiday"/>
        </template>
    </div>
</template>

<script setup>
    import HolidaysComponent from '@/components/HolidaysComponent.vue';
    import { ref, onMounted } from 'vue';
    import http from '@/service/http';
    import { useRoute } from 'vue-router';
    
    const holidays = ref([]);
    const route = useRoute();

    onMounted( async ()=>{
        try{
            const {data} = await http.get(route.params.year);
            holidays.value = data;
            console.log(holidays);
        } catch(e){
            console.log("Erro: ", e);
        }
    });

</script>