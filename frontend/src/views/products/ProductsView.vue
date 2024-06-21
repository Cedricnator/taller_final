<!-- La pagina escucha lo que dice el select y en base a eso le envia los datos al productListCard -->

<template>
      <NavbarComponent />
      <div class="carrousel">
         <ProductCarrousel />
      </div>
      <div class="select">
         <h1>
            ¿Que tipo de automovil estas buscando?
         </h1>
         <ProductSelect />
      </div>
      <div>
         <ProductListCard :productList="productList" 
         />
      </div>
      <FooterComponent />
</template>

<script setup lang="ts">
import NavbarComponent  from '@/components/shared/NavbarComponent.vue';
import ProductCarrousel from '@/components/products/ProductCarrousel.vue';
import ProductSelect    from '@/components/products/ProductSelect.vue';
import ProductListCard  from '@/components/products/ProductListCard.vue';
import FooterComponent from  '@/components/shared/FooterComponent.vue';

const productList = [
   { id: 1, title: 'Carro 1', image: 'https://via.placeholder.com/150', price: 1000 },
   { id: 2, title: 'Carro 2', image: 'https://via.placeholder.com/150', price: 2000 },
   { id: 3, title: 'Carro 3', image: 'https://via.placeholder.com/150', price: 3000 },
   { id: 4, title: 'Carro 4', image: 'https://via.placeholder.com/150', price: 4000 },
   { id: 5, title: 'Carro 5', image: 'https://via.placeholder.com/150', price: 5000 }
]
</script>


<style scoped>
.carrousel {
   margin-top: 4rem;
}
.select {
   margin-top: 4rem;
   margin-bottom: 4rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
}
</style>