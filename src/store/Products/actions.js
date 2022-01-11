import axios from 'axios';
export const getProducts=({commit})=>{
 axios.get('http://localhost:3000/posts')
 .then(response=>{
     commit('SET_PRODUCTS',response.data  )
 })
}