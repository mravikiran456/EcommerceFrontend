<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}" style="background-color: transparent 0.7; opacity:0.7" >
          <q-card-section  >
            <q-avatar size="103px" class="absolute-center ">
              <img src="https://res.cloudinary.com/ravikiran143/image/upload/v1641196519/sc-logo_p7kdtx.png">
            </q-avatar>
          </q-card-section>
          <q-card-section >
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
              type="email"
                filled
                v-model="email"
                label="Email"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div class="text-center q-mt-sm q-gutter-lg">
                <q-btn label="Login" to="/" type="button" v-on:click="login" style="background-color: #B0BCC0;"/>
              </div>
              <p class="text-center q-mt-sm q-gutter-lg">
                <router-link to='/sign-up' >Sign Up</router-link>
            </p>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import{ref,onMounted} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router';
export default{
  setup(){
    const email=ref()
    const password=ref()
    const result=ref()
    const router=useRouter()
    async function login() {
     result.value=await axios.get(
       `http://localhost:3000/user?email=${email.value}&password=${password.value}`
     )
        if(result.value.status==200 && result.value.data.length>0 ){
        localStorage.setItem("user-info",JSON.stringify(result.value.data[0]))
     router.push('/')
      }
    }
     onMounted(()=>{
      let user=localStorage.getItem('user-info');
      if(user){
        router.push('/')
      }
    })
  
   
    return{
       
       email,
       password,
       login
    }

  }
}
</script>

<style>

.bg-image {
  background-image:url('https://res.cloudinary.com/ravikiran143/image/upload/v1641444280/photo-1488342994276-7c3bc0742042_khfljg.jpg');
  background-size:cover
}
</style>