<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search employee"
      class="border border-black m-5 px-3 placeholder:text-green-700">
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-2">
      <EmployeeCard v-for="employee in filteredEmployees" :key="employee.name" :employee="employee" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { store } from '@/stores/store'
import EmployeeCard from '@/components/EmployeeCard.vue';

const searchQuery = ref('');

const filteredEmployees = computed(() => {
  return store.employees.filter(employee => {
    return employee.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>

<style scoped></style>
