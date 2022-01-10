<template>
    <q-layout>
      <q-page-container>
        <q-page class="flex bg-image flex-center">
          <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}" style="background-color: transparent 0.7; opacity:0.7">
            <q-card-section>
              <q-avatar size="103px" class="absolute-center ">
                <img src="https://res.cloudinary.com/ravikiran143/image/upload/v1641196519/sc-logo_p7kdtx.png">
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="text-center q-pt-lg">
                <div class="col text-h6 ellipsis">
                  Sign in
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form
                class="q-gutter-md"
              >
                <q-input
                  filled
                  v-model="firstName"
                  label="firstName"
                  lazy-rules
                />
                <q-input
                filled
                v-model="lastName"
                label="lastName"
                lazy-rules
              />
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
                  <q-btn label="Sign up" @click="signUp"  type="button" />   
                </div>
                <p class="text-center q-mt-sm q-gutter-lg">
                  <router-link to='/login' >Login</router-link>
              </p>
               
              </q-form>
            </q-card-section>
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
import {ref,onMounted} from 'vue'
import axios from 'axios'

import {useRouter} from 'vue-router';

export default{
  setup(){
    const firstName=ref()
    const lastName=ref()
    const email=ref()
    const password=ref()
    const result=ref()
    const router=useRouter()
  
     async function signUp(){
      result.value =await axios.post(" http://localhost:3000/user",{
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
      })
      // console.warn(result.value);
      // if(result.value.status==201){
      //   alert("sign-up-done")
      // }
      if(result.value.status==201){
        localStorage.setItem("user-info",JSON.stringify(result.value))
     router.push('/')
      }
  
    }
    onMounted(()=>{
      let user=localStorage.getItem('user-info');
      if(user){
        router.push('/')
      }
    })
  
    return {
       firstName,
       lastName,
       email,
       password,
       result,
      signUp
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