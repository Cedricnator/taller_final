<template>
   <div class="card flex justify-center">
      <SelectButton 
         v-model="value" 
         :options="options" 
         optionLabel="name" 
         
         multiple aria-labelledby="multiple" 
      />
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(null);
const options = ref([
   { name: 'Ver todos', value: 1, active: true },
   { name: 'HatchBack', value: 2 },
   { name: 'Sedán', value: 3 },
   { name: 'SUV', value: 4 },
   { name: 'Coupé', value: 5 },
   { name: 'AMG', value: 6 },

]);
</script>