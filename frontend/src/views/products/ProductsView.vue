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
         <ProductListCard />
      </div>
</template>

<script setup lang="ts">
import NavbarComponent  from '@/components/shared/NavbarComponent.vue';
import ProductCarrousel from '@/components/products/ProductCarrousel.vue';
import ProductSelect    from '@/components/products/ProductSelect.vue';
import ProductListCard  from '@/components/products/ProductListCard.vue';
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