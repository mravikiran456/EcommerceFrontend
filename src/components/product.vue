<template>
    <li class="product-item1"  @click="$router.push('/details')">
        <img src="https://res.cloudinary.com/ecomrce/image/upload/v1640859012/Home/cat-sm01_t0t1bx.jpg" alt="product"  class="product-image1" />
        <hr/>
        <div>
            <h1 class="product-heading1">Heavy Weight Goagle Jersey</h1>
            <p class="product-catogory1">Mens Originals</p>
        </div>
        <div class="price-and-rating-container1">
            <p class="price1">$6.7</p>
            <p class="price1">Sales Rank:</p>
          
            
        </div>
        <div class="rating1">
            <q-rating v-model="stars" class="rating1" :max="5" readonly size="17px"></q-rating>
        </div>
        <button class="add-to-cart-button">Add to Cart</button>
    </li>
</template>