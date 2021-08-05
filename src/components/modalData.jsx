import React from 'react'
import Axios from 'axios'

function ModalData(Props) {
  const { item , docid} = Props
         return Axios.get(`https://www.superheroapi.com/api.php/1406394676405100/${item}/`)
        .then(response => {
          const {data} = response
          const results = [data]
          const hero = results.map( results =>{  
              const {name} = results
              const {image} = results
              const {id} = results
              const {appearance} = results
              const {biography} = results
              const {powerstats} = results
          if(name != undefined && image != undefined && id != undefined){ 
              return {name, biography ,appearance, image, powerstats , id, docid}
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

export default ModalData