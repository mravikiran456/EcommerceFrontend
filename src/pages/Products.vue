<template>
    <div>
        <q-page class="products-page-nav-container">
            <Header />
        <!-- <div class="home-page">
            <TopBanner />
        </div> -->
            <div class="home-trending-section">
                <!-- <h1 class="home-trending-section-heading">Trending</h1> -->
                <DisplayProducts />
            </div>
            <div class="home-trending-section">
                <h1 class="home-brand-section-heading">Shop By Brand</h1>
                <ShopByBrand />
            </div>
        
        </q-page>
    </div>
</template>
<script>

import Header from '../components/Header.vue'
import DisplayProducts from '../components/DisplayProducts.vue'
import TopBanner from '../components/homeComponents/TopBanner.vue'
import ShopByBrand from '../components/homeComponents/ShopByBrand.vue'



export default {
    components: {
        Header,
        DisplayProducts,
        TopBanner,
        ShopByBrand,
    }
}
</script>