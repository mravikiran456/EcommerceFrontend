<template>
    <div class="product-page">
      <ProductHeader/>
      <div class="side-bar-products-section">
          <Sidebar/>
          <div>
            <Search/>
              <ProductDisplay/>
          </div>
      </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue'
import ProductHeader from '../components/ProductHeader.vue'
import ProductDisplay from '../components/productDisplay/productDisplay.vue'
import Search from '../components/sidebar/Search.vue'
export default {
  components: {
      Sidebar,
      ProductHeader,
      ProductDisplay,
      Search,
  }
}
</script>
