<template>
<div class="price-filter">
    <div class="category-heading-container">
        <h1 class="category-heading">Price</h1>
    </div>
  <div class="q-pa-md product-price-filter">
    <q-range
      v-model="model"
      :min="5"
      :max="5000"
      :step="4"
      :left-label-value="'Price: ' + model.min + '$'"
      :right-label-value="'Price: ' + model.max + '$'"
      label-always
      color="purple"
    />
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref({
        min: 5,
        max: 5000,
      })
    }
  }
}
</script>
