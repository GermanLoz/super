import React from 'react'
import { db } from '../components/firestore.js'

async function Database(userId, id){

    const number = Math.floor(Math.random() * 999999)
    const cardId = number 
    const superDate = {
        heroId:id,
        userId: userId,
        cardId:`${cardId}`
    }

    try{
   const date = db.collection("hero").add(superDate)
    }
    catch(e){
        console.log(e)
    }
    return console.log("exelente")
}

export default Database
