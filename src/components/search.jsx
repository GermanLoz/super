import React from 'react'
import Axios from 'axios'

function Search(Props) {
  const { keyword } = Props
  return Axios.get(`https://www.superheroapi.com/api.php/1406394676405100/search/${keyword}/`)
  .then(response => {
    const  data = response.data
    const {results = []} = data
    const hero = results.map( results =>{  
      const {name} = results
      const {image} = results
      const {id} = results
      const {appearance} = results
      const {biography} = results
      const {powerstats} = results
  if(name != undefined && image != undefined && id != undefined){ 
      return {name, biography ,appearance, image, powerstats , id}
     } else {
       return ''
     }
  })
  return hero
})
   .catch( error =>{
    console.log(error);
    })
  }
  
export default Search
