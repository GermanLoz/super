import React,{useState} from 'react'
import Axios from 'axios'

function ModalData(Props) {
  const { item , docid} = Props
        //return Axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${keyword}&apikey=fa4bf0654767a8d06c14089bb345c17e`)
         return Axios.get(`https://superheroapi.com/api/1406394676405100/${item}/`)
        .then(response => {
          const {data} = response
          const results = [data]
          const f = results.map( results =>{  
              const {name} = results
              const {image} = results
              const {id} = results
          if(name != undefined && image != undefined && id != undefined){ 
              return {name, image, id, docid}
             } else {
               return ''
             }
          })
          return f
       })
         .catch( error =>{
          console.log(error);
          })
        }

export default ModalData