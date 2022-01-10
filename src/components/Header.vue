<template>
<div>
    <q-header bordered class="bg-white text-black " >
     <div class="pages-container">
      <q-toolbar>
        <q-toolbar-title>
         <img src="https://res.cloudinary.com/ecomrce/image/upload/v1640926986/Header/logo104909_hid3fj.png"  @click="$router.replace('/')">
        </q-toolbar-title>
       
        <q-tabs  >
          <!-- @click="visible=!visible" -->
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/Product" label="Product" />
          <q-route-tab to="/Cart" label="Cart" />
       
          <div class="logout-con">
             <q-btn color="black" text-color="white" label="logout" @click="logout"/> 
              <!-- @click="$router.replace('/login')"  -->
           </div>

        </q-tabs>
      
      </q-toolbar>
    </div>

      
    </q-header>
    </div>
</template>
<script>

import {useRouter} from 'vue-router';
  export default{
  
 setup(){
   const router=useRouter()
   const logout=()=>{
    localStorage.clear();
    router.push('/login')

   }
    return {
   logout
 }
 }
 }
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
.logout-con{
 
 margin-left: 20px;
}

.header{
  padding: 0;
  margin: 0;
}


</style>