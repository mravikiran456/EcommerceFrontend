<template>
<div class="display-products-section">
    <ul class="products-container">
        <li class="product-item" v-for="productItem in state.data" :key="productItem.id">
            <Product :productData="productItem"/>
         </li>
   </ul>
</div>
</template>

<script>
import {reactive} from 'vue'
import Product from './product.vue'

export default{
    components: {
        Product,
    },
    setup() {
        let state = reactive({
            data: [],
        })

        const fetchApi = async () => {
            const response = await fetch('https://fakestoreapi.com/products/?limit=8')
            const data = await response.json()
            state.data = data
            console.log(state.data)
        }

        fetchApi()
        
        return {
            state,
            fetchApi,
        }
            
}
}
        
</script>