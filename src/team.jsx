import React, {useState, useEffect} from 'react'
import Nav from './components/nav.jsx'
import Modal from './components/modal.jsx'
import { auth } from './components/fire.js'
import { db } from './components/firestore.js'

export default function Team() {
    const[up, setUp] = useState(false)
    const[card, setCards] = useState([])
    const [userId, setUserId] = useState('')
    
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
          if(user){
            setUserId(user.email)
          }
        })
      },[])


    useEffect(()=>{
        if(userId){ 
        const getTeam = async()=>{
                const { docs } = await db.collection("hero").where('userId','==',`${userId}`).get()
                const heroTeam = docs.map( item => ({id:item.id, ...item.data() }) )
                setCards(heroTeam)
        }
        getTeam()
    }
    },[userId])

    return (
        <div>
            <Nav/>
            <div className="team-inicio">
                <p>MY TEAM</p>
                 <button
                    onClick={(e)=> setUp(true)} 
                    className="team-button">SEE TEAM 
                    <i class="fas fa-angle-double-down"></i>
                    </button>
            </div>
            <Modal setCards={setCards} estado={up} setUp={setUp} card={card} deletId={card.id} user={userId}/>
        </div>
    )
}
