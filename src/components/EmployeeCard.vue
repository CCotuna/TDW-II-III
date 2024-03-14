<template>

    <div class="block max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 space-y-3">
        <div class="flex justify-center">
            <div class="flex flex-col justify-center items-center space-y-2">
                <img :src="employee.image" alt="Employee" class="rounded-full">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ employee.name }}</h5>
                <p class="font-normal text-gray-700">{{ employee.position }}</p>
                <div class="space-x-3">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-reddit"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <i class="bi bi-three-dots ms-5"></i>
        </div>
    </div>


</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    employee: Object
});

</script>

<style scoped></style>