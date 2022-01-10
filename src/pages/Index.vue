<template>
  <div>
    <Header />
  <div class="carousel-container">
    <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://res.cloudinary.com/ravikiran143/image/upload/v1640928098/men_cqli0i.jpg"  />
        <q-carousel-slide :name="2" img-src="https://res.cloudinary.com/ravikiran143/image/upload/v1640928099/women_hht8ru.jpg"  />
       
      </q-carousel>

    </div>
     
    <div className="home-container ">
    
        <div className="home-content">
          
          <h1 className="home-heading">Treat Your Self </h1>
          <img
            src="https://res.cloudinary.com/ravikiran143/image/upload/v1640928405/shopp_hjvg0v.jpg"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
 
         <p className="home-description">
          Life isn't perfect but your outfit can be.Clothes are just like a friends, 
          you want quality not quantity.Get the best offers in the quality products.
          So,celebrate the seasons new and exciting fashion in your own way.


         </p>
         <q-btn color="black" text-color="white" label="Shop Now" class="shop-now-button" @click="$router.replace('/Product')"/>  
 
          
        </div>
          <img
          src="https://res.cloudinary.com/ravikiran143/image/upload/v1640928405/shopp_hjvg0v.jpg"
            alt="clothes that get you noticed"
            className="home-desktop-img"
          />
    </div>
  </div>
</template>
<script>
 import { ref,onMounted,onBeforeMount } from 'vue'
 import Header from '../components/Header.vue'
import {useRouter} from 'vue-router';

export default {
  name:'Index',
//   data(){
// return {
//   name:''
// }
//   },
  components:{
    Header,

  },
  setup () {
    let name=ref()
   let cap=ref()
  
   
    const router=useRouter()
    onMounted(()=>{
      let user=localStorage.getItem('user-info');
//       name.value=JSON.parse(user).firstName
//       console.log(name.value)
//       cap.value=name.value.toUpperCase();
//  console.log(cap.value)
  
      if(!user){
        router.push('/sign-up')
      }
    })
  
    return {
      slide: ref(1),
      name,
      cap
   
    }

  }
}
</script>
<style scoped>
.carousel-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:10px;
}

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  width: 90%;
  max-width: 1110px;
  
} 

@media screen and (min-width: 768px) {
  .home-container {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 96px;
  }
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .home-content {
    align-items: flex-start;
  }
}

.home-mobile-img {
  width: 206px;
}

@media screen and (min-width: 768px) {
  .home-mobile-img {
    display: none;
  }
}

.home-desktop-img {
  width: 50%;
  max-width: 450px;
  margin-left: 85px;
}

@media screen and (max-width: 767px) {
  .home-desktop-img {
    display: none;
  }
}

.home-heading {
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .home-heading {
    font-size: 46px;
    text-align: left;
  }
}

.home-description {
  font-family: 'Roboto';
  margin-top: 36px;
  font-size: 14px;
  line-height: 28px;
  color: #64748b;
  margin-bottom: 0px;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .home-description {
    font-size: 18px;
    margin-top: 0px;
    text-align: left;
  }
}

.shop-now-button {
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
}

@media screen and (min-width: 768px) {
  .shop-now-button {
    width: 150px;
    font-size: 16px;
  }
}
</style>