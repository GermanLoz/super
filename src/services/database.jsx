import React from 'react'
import { db } from '../components/firestore.js'

async function Database(userId, alignament, id){
    const number = Math.floor(Math.random() * 999999)
    const cardId = number 
    const superDate = {
        heroId:id,
        alignament:alignament,
        userId: userId,
        cardId:`${cardId}`
    }
    try{
        db.collection("hero").add(superDate)
    }
    catch(e){
        console.log(e)
    }
    return console.log("exelente")
}

export default Database
