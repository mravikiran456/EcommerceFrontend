<template>
    <div class="side-bar">
        <Price />
        <div class="categories-section">
            <Categories />
        </div>
        <Rating />
    </div>
</template>

<script>
import Search from './Search.vue'
import Categories from './Categories.vue'
import Rating from './Rating.vue'
import Price from './Price.vue'


export default {
    components: {
        Search,
        Categories,
        Rating,
        Price,
    }
}
</script>