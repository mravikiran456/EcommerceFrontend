<template>
<div>
    <Header/>
    <div class="cart-container"  v-if= "cart.length === 0" style="text-align: center">
        <h4 class="cart">My Cart</h4>
        <q-btn roubd color="primary" icon="shopping_cart" />
        <div class="mt-4">
            <h4 class="orange-re fw-600" style="font-size: 32px">
            My Cart is Empty </h4>
            <h4 class="darkblue fw-600" style="font-size: 32px">
                You can go to home page can you see more items </h4>
            </div>
            <div class="btn-container q-pa-md q-gutter-sm">
                <q-btn
                class="q-mt-xl"
                color="blue"
                text-color="white"
                unelevated 
                label="Shop Now"
                no-caps
                />
                </div>
    </div>
    <div v-else>
        <Cartitems />
        </div>
</div>
    
</template>
<script>
import Cartitems from 'components/Cartitems.vue'
import Header from '../components/Header.vue'
import {ref} from 'vue'

export default {
    components:{
        Cartitems,
        Header,
    },
    setup() {
        const cart = ref([
      
        ])
        return {
            cart
        }
    },
}
</script>

<style scoped>
.cart {
    display: flex;
    justify-content: center;
    color: blue;
}
.orange-re {
    color: orangered
}
.darkblue {
    color: darkblue;
}

</style>
