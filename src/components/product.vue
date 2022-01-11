<!-- <template>
    <div class="row mt-5" v-if="product">
      <div class="col-4">
        <img :src="product.image" class="w-100" />
      </div>
      <div class="col-8">
        <h1>{{ product.title }}</h1>
        <h3>${{ product.price }}</h3>
  
        <input type="text" v-model.number="quantity" class="text-center col-1 mr-2 p-1" />
        <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
  
        <p class="mt-4">{{ product.description }}</p>
      </div>
    </div>
  </template>

  <script>
 export default{
  props:["product"]   
 };
  </script> -->

<!-- <template>
    <div >
    <li class="product-item1"  @click="$router.push('/details')">
        <img src="https://res.cloudinary.com/ravikiran143/image/upload/v1641808230/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1_ilkfcy.webp" alt="product"  class="product-image1" />
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
</div>
</template>
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default {
    setup(){
        const $store=useStore()
        return{
            products:computed(()=>$store.getters['Products/getProductList'])
        }
    }
}
</script> -->