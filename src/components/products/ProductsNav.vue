<template>
  <div class="q-pa-md">
    <div class="produts-nav-container">
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
      >
        <q-tab :ripple="false" name="Mens"  label="Mens" />
        <q-tab :ripple="false" name="Womens"  label="Womens" />
      </q-tabs>
    </div>
    <ProductsPageCarousel />
    <div class="category-cards">
        <CategoryCard />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ProductsPageCarousel from '../products/productsPageCarousel.vue'
import CategoryCard from '../products/CategoryCard.vue'

export default {
  components: {
    ProductsPageCarousel,
    CategoryCard,
  },

  setup () {
    return {
      tab: ref('Mens')
    }
  }
}
</script>
