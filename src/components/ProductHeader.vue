<template>
    <div>
    <q-header bordered class="bg-white text-black " >
     <div class="pages-container">
      <q-toolbar>
        <q-toolbar-title>
         <img src="https://res.cloudinary.com/ecomrce/image/upload/v1640926986/Header/logo104909_hid3fj.png"  @click="$router.replace('/Home')">
        </q-toolbar-title>
       
        <q-tabs align="" >
         
          <q-route-tab to="/" label="Home" @click="visible=!visible" />
          <q-route-tab to="/Product" label="Product" />
          <q-route-tab to="/product/men" label="Men" />
          <q-route-tab to="/product/women" label="Women" />
          <q-route-tab to="/Cart" label="Cart" />
          <div class="logout">
             <q-btn color="black" text-color="white" label="Logout"  @click="$router.replace('/Login')"/>  
           </div>

        </q-tabs>
      
      </q-toolbar>
    </div>

      
    </q-header>
    </div>
</template>

<script>
  
</script>
<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  img{
   max-width:30%;
   padding: 10px;
  }
.pages-container{
  padding: 0;
  margin: 0;
  max-width: 90%;
}
.logout{
 
 margin-left: 20px;
}

.header{
  padding: 0;
  margin: 0;
}


</style>