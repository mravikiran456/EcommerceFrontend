<template>
     <div class="order-container" >
     
       <div
      class="example-state rounded-borders text-center absolute-top q-mt-md q-ml-md q-mr-lg text-white"
    >
     Order Page
    </div>
       <div class="orderlist-container">
           <div class="order_id1">
           <h3 class="order_id">S.no </h3>
           <p class="num">1</p>
           </div>
           <h3 class="order-details">Order-Items </h3>
           <h3 class="order-quantity">Quantity </h3>
           <h3 class="order-price">Price </h3>
           
           </div>
    </div>
</template>

<script>
export default {
    setup() {
    },
}
</script>

<style scoped>
.order-heading {
    color: blue;
    font-size: 36px;
    font-size: bold;
}
.order-container {
    display: felx;
    justify-content: center;
}
.example-state {
  background: rgb(182, 11, 11);
  font-size: 20px;
  color: red;
  padding: 10px;
  opacity: 0.8;
  width: 70%;
}
.orderlist-container {
    padding: 24px;
    display: flex;
    justify-content:space-around; 
}
.order-details {
    padding-left: 100px;
    padding-top: 24px;
    font-size: 24px;
    font-weight: bold;
}
.order_id {
    padding-top: 24px;
    font-size: 24px;
    font-weight: bold;
}
.order-quantity {
    padding-left: 100px;
    padding-top: 24px;
    font-size: 24px;
    font-weight: bold;
}
.order-price {
    padding-left: 100px;
    padding-top: 24px;
    font-size: 24px;
    font-weight: bold;
}
</style>