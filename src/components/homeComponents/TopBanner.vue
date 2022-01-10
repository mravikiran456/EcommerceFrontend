<template>
    <div class="home-page-banner-section">
        <div class="home-page-banner-text-container">
            <p class="home-page-banner-title">Has just arrivied!</p>
            <h1 class="home-page-banner-heading">Huge Summer Collection</h1>
            <p class="home-page-banner-detail">Shirts, Top Wear, Bottom Wear & much more...</p>
            <ShopNowButton />
            <HomeGenderFilter />
        </div>
        <div>
            <img class="home-page-banner-image" src="https://res.cloudinary.com/ecomrce/image/upload/v1640945235/Home/03_kn2xkp.jpg" alt="banner-image" />
        </div>
    </div>
</template>

<script>
import HomeGenderFilter from '../homeComponents/HomeGenderFilter.vue'
import ShopNowButton from '../ShopNowButton.vue'
    export default{
        components: {
            HomeGenderFilter,
            ShopNowButton,
        },
    }
</script>