<template>
<div>
    <ul v-for="product in exampleData" :key="product.id">
       <li class="product" v-for="product in exampleData" :key="product.name">
          <h1 class="product-name">{{product.name}}: 
            <span v-for="value in product.values" :key="value">
              <span v-if="product.name == 'Stars'" >*</span>
            </span>

          </h1>
        </li>
        <button>add to cart</button>
    </ul>
  </div>
</template>

<script>
 import {ref} from 'vue'
 import ProductItems from '../components/products/ProductItems.vue'

export default{
  components: {
    ProductItems,
  },
  setup() {
      
       const exampleData = ref([
            {name : 'id', values: 1,},
            {name: 'Title', class: '', values: 'Heavy Weight',},
            {name: 'price', values: '$8.10',},
            {name: 'Stars', values:3,},
    
            {name : 'id', values: 2,},
            {name: 'Title', values: ' Goagle Jersey',},
            {name: 'price', values: '$10.10',},
            {name: 'Stars', values: 2,},

            {name : 'id', values: 3,},
            {name: 'Title', values: 'Heavy Weight Jersey',},
            {name: 'price', values: '$12.10',},
            {name: 'Stars', values: 4,}
      ])
      console.log(exampleData)

      return{
        exampleData,
      }
    }
}
</script>











<style scoped>
.product{
  margin-bottom: 20px;
  border: 1px solid black;
}
</style>