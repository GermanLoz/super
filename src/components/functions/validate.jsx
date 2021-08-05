import React from 'react'
import Axios from 'axios'

export default async function Validate(email,password) {
return await Axios.post("http://challenge-react.alkemy.org/",
    {email,password}
    )
    .then((e)=>{
        const datos = e
        return datos
    })
    .catch((e)=>{
        console.log(e)
        return e
      })
}
