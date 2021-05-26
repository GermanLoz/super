import React from 'react'
import Axios from 'axios'

function Search(Props) {
  const { keyword } = Props
  return Axios.get(`https://superheroapi.com/api/1406394676405100/search/${keyword}/`)
  .then(response => {
    const  data = response.data
    const {results = []} = data
    const hero = results.map( results =>{  
        const { name } = results
        const {image } = results
      
        return {name, image}
    })
    return hero
  })
   .catch( error =>{
    console.log(error);
    })
  }
  
export default Search
