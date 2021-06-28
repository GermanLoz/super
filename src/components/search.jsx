import React from 'react'
import Axios from 'axios'

function Search(Props) {
  const { keyword } = Props
 // return Axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=captain&apikey=fa4bf0654767a8d06c14089bb345c17e`)
  return Axios.get(`https://superheroapi.com/api/1406394676405100/search/${keyword}/`)
  .then(response => {
    const  data = response.data
    const {results = []} = data
    const hero = results.map( results =>{  
        const {name} = results
        const {image} = results
        const {id} = results
      
        return {name, image, id}
    })
    return hero
  })
   .catch( error =>{
    console.log(error);
    })
  }
  
export default Search
