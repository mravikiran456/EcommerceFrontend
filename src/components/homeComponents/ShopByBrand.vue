<template>
    <div class="display-products-section">
    <ul class="products-brand-container">
        <li class="shop-by-brand-item1" v-for="brand in brandList" :key="brand.id">
            <img class="product-brand-image" :src="brand.imageUrl" alt="brand.name" />
            <p class="brand-name">{{brand.name}}</p>   
        </li>
   </ul>
</div>
</template>

<script>
import {ref} from 'vue'

    export default{
       
        setup() {
            // dummy data replace with api
            const brandList = ref([
                {
                    id: 'ADIDAS',
                    name: 'Adidas',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200049/home-brands/adidas_esvisy.jpg',
                },
                {
                    id: 'NIKE',
                    name: 'Nike',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200048/home-brands/nike_hot21e.jpg',
                },
                {
                    id: 'GUCCI',
                    name: 'Gucci',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200049/home-brands/channels4_profile_x1ponq.jpg',
                },
                {
                    id: 'LOUIS',
                    name: 'Louis',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200040/home-brands/unnamed_cmfhqx.jpg',
                },
                {
                    id: 'CARTIER',
                    name: 'Cartier',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200001/home-brands/cartier-logo_galoda.png',
                },
                {
                    id: 'ZARA',
                    name: 'zara',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200010/home-brands/zara_yrr07k.jpg',
                },
                {
                    id: 'H&M',
                    name: 'H&M',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200014/home-brands/hm-symbol-logo_gkjbvu.png',
                },
                {
                    id: 'HERMES',
                    name: 'Hermes',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641200017/home-brands/hermes_gfqiv6.jpg',
                },
                {
                    id: 'CHANEL',
                    name: 'Chanel',
                    imageUrl: 'https://res.cloudinary.com/ecomrce/image/upload/v1641199997/home-brands/8cb29dcfb213a19e5e0e3f889e31df43_g5ijng.jpg',
                },
            ])

            return{
                brandList,
            }
        }
    }
</script>           