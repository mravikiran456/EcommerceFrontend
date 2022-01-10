<template>
<div class="product-category-section">
    <div class="category-heading-container">
        <h1 class="category-heading">Brands</h1>
    </div>
    <ul class="product-catagory-container">
        <li class="product-catagory">
            <input class="category-input" id="shirts" type="checkbox" />
            <label class="category-label" :for="shirts">Shirts</label>
        </li>
        <li class="product-catagory">
            <input class="category-input" id="pants" type="checkbox" />
             <label class="category-label" :for="Pants">Pants</label>
        </li>
        <li class="product-catagory">
            <input class="category-input" id="tShirts" type="checkbox" />
            <label class="category-label" :for="tShirts">T-shirts</label>
        </li>
        <li class="product-catagory">
            <input class="category-input" id="shorts" type="checkbox" />
            <label class="category-label" :for="shorts">Shorts</label>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  
}
</script>
