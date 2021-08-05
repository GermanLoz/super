import React from 'react'
import {db} from './firestore.js'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/firestore'


export default async function Delet(Props) {
    const {id, setActualizar, user} = Props
    const card = id.id
    if(card){ 
           await db.collection("hero").doc(card).delete()
        if(id){ 
            const getTeam = async()=>{
                    const { docs } = await db.collection("hero").where('userId','==',`${user}`).get()
                    const heroTeam = docs.map( item => ({id:item.id, ...item.data() }) )
                    if(heroTeam){
                       setActualizar(heroTeam)
                    }
            }
           return  getTeam()
        }
    }
}
