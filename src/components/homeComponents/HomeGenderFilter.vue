<template>
<div class="home-banner-gender-filter-section">
  <div class="home-banner-gender-filter-container">

    <q-card class="my-card" @click="$router.push('/product/men')">
      <img class="home-banner-gender-image" src="https://res.cloudinary.com/ecomrce/image/upload/v1640859012/Home/cat-sm01_t0t1bx.jpg" alt="Men">

      <q-card-actions class="home-banner-gender-heading-container" align="center">
        <h1 class="home-banner-gender-heading">Men</h1>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" @click="$router.push('/product/women')">
      <img class="home-banner-gender-image" src="https://res.cloudinary.com/ecomrce/image/upload/v1640859011/Home/cat-sm02_aqlmrt.jpg" alt="Women">

      <q-card-actions class="home-banner-gender-heading-container" align="center">
        <h1 class="home-banner-gender-heading">Women</h1>
      </q-card-actions>
    </q-card>
   </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
