import React from 'react'
import { db } from '../firestore.js'

export default function myTeam(user) {
        const username = user.user
        const heroAlignament = user.alignment

    const getTeam = async()=>{
                const { docs } = await db.collection("hero").where('userId','==',`${username}`).get()
                return docs.map( item => ({id:item.id, ...item.data() }))
            }
  return getTeam().then( response => {
        let condition = true
        const good = response.filter( item => item.alignament === 'good').length
        const bad = response.filter( item => item.alignament === 'bad').length

    if(good + bad >= 6){
        condition = false
    } else {        
        let valor = null
        heroAlignament === 'good' ?
            valor = good
        : valor = bad
            if( valor >= 3){
                condition = false
            } else {
                condition = true
            }
    }
    return condition
   })
}
