import React, {useState, useEffect} from 'react'
import Nav from './components/nav.jsx'
import Modal from './components/modal.jsx'
import { auth } from './components/fire.js'
import { db } from './components/firestore.js'

export default function Team() {
    const[up, setUp] = useState(false)
    const[card, setCards] = useState([])
    const [userId, setUserId] = useState('')
    const [det, setDet] = useState('')
    
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
          if(user){
            setUserId(user.email)
          }
        })
      },[])

      useEffect(()=>{
        if(det.length > 0){
          setUp(false)
          window.scroll(0,0)
        } else {
          setUp(true)
         }
      },[det])

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
                    {
                det != [] ?
                det.map( item => {
                        const biography = [item.biography]
                        const appearance = [item.appearance]
                        console.log(appearance)
                        return <div className="detalle-card">
                                <div className="detalle-hero">
                                <button
                                      onClick={(e)=>setDet([])} 
                                      className="down-detalle">
                                    <i class="fas fa-times"></i>
                                </button>
                                    <h3>{item.name}</h3>
                                    <img src={item.image.url}/>
                                </div>
                                <div className="bio">
                                  <div class="apariencia">
                                    {
                                     appearance ?
                                      appearance.map(item => {
                                        return <div className="apariencia">
                                                 <p className="title-det">Appearance</p>
                                                 <p>gender: {item.gender}</p>
                                                 <p>race: {item.race}</p>
                                                 <p>eye color: {item['eye-color']}</p>
                                                 <p>hair color: {item['hair-color']}</p>
                                                 <p>height: {item.height[0]} , {item.height[1]}</p>
                                                 <p>weight: {item.weight[0]} , {item.weight[1]}</p>
                                               </div>
                                      })
                                     : " "
                                    }
                                  </div>
                                  <div className="biografia">
                                { 
                                    biography ?
                                    biography.map(item =>{
                                      return <div className="biography">
                                              <p className="title-det">Biography</p>
                                              <p>Full name: {item['full-name']}</p>
                                              <p>Ater ego: {item['alter-egos']}</p>
                                              <p>Alignment: {item.alignment}</p>
                                              {
                                                item.aliases ?
                                                item.aliases.map(item => {
                                                  return <p>Aliases: {item}</p>
                                                })
                                                : " "
                                              }
                                              <p>first appearance: {item['first-appearance']}</p>
                                              <p>place of birth: {item['place-of-birth']}</p>
                                              <p>publisher: {item['publisher']}</p>
                                            </div>
                                    })
                                    : " "
                                    }
                                    </div>
                                </div>
                            </div>
                        })
                        : " "
            }
            </div>
              <div>
                 <Modal setDet={setDet} setCards={setCards} estado={up} setUp={setUp} card={card} deletId={card.id} user={userId}/>
              </div>
        </div>
    )
}
