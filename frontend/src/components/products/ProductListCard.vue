<template>
   <div class="grid">
      <ProductCard 
         v-for="product in productList"
         :key="product.id"
         :productTitle="product.title"
         :productImage="product.image"
         :productPrice="product.price"
      />

   </div>

</template>

<script setup lang="ts">
import ProductCard from '@/components/products/ProductCard.vue';

interface ProductListProps {
  productList: Array<{
    id: string | number;
    title: string;
    image: string;
    price: string | number;
  }>;
}
defineProps<ProductListProps>();
</script>

<style scoped>
   .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
      gap: 2rem;
   }

</style>