<template>
<div class="display-products-section">
    <!-- <ul class="products-container">
        <li class="product-item" v-for="productItem in state.data" :key="productItem.id">
            <Product :productData="productItem"/>
         </li>
   </ul> -->

   <ul class="products-container "> 
    <div class="row">
    <li class="product-item1"  v-for="product in products" :key="product._id" @click="$router.push('/details')">
        <img :src="product.image" alt="product"  class="product-image1" />
        <hr/>
        <div>
            <h1 class="product-heading1">{{product.brand}}</h1>
            <p class="product-catogory1">{{product.title}}</p>
        </div>
        <div class="price-and-rating-container1">
            <p class="price1">{{product.price}} /-</p>  
        </div>
        <div>
            <p>{{product.rating}}     <q-rating
                v-model="ratingModel"
                size="2em"
                :max="1"
                color="blue"
                >
                </q-rating>
              | 
              {{product.reviews}}  </p>
        </div>
        <!-- <p class="product-catogory1"> {{product.reviews}} </p> 
        <div class="rating1">
            <q-rating
            v-model="product.review"
            max="5"
            size="3em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
          />
        </div> -->
        <button class="add-to-cart-button">Add to Cart</button>
    </li>
</div>
</ul>

  
</div>
</template>

<script>
import {reactive} from 'vue'
import {computed} from 'vue';
import {useStore} from 'vuex';

export default{
    setup(){
        const $store=useStore()
        return{
            products:computed(()=>$store.getters['Products/getProductList'])
        }
    },
    // components: {
    //     Product,
    // },
    // computed:{
    //     products () {
    //         return this.$store.state.products;
    //     }
    // },
 mounted() {
     this.$store.dispatch('Products/getProducts')
 }

}
        
</script>