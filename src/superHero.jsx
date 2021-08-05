import React, { useEffect, useState } from 'react'
import Nav from './components/nav.jsx'
import Search from './components/search.jsx'
import ResultHero from './components/resultHero.jsx'
import Card from './components/card.jsx'
import Database from './services/database.jsx'
import useAuth from './components/hooks/useAuth.jsx'
import myTeam from './components/heroData/myTeam.jsx'

function SuperHero() {
    const [clase, setClase] = useState('none')
    const [hero, setHero] = useState([])
    const[keyword, setSearch] = useState('Hero')
    const[title, setTitle] = useState('Team')
    const [id, setAgregar] = useState('')
    const [userId, setUserId] = useState('')
    const [message, setMesagge] = useState('')
    const [messageClass, setMesaggeClass] = useState('none')
    const auth = useAuth()
    const user = auth.user

    useEffect(()=>{
      setUserId(user.username)
    },[auth])

const alerta = (color, mensaje)=>{
  setMesagge(`${mensaje}`)
  setMesaggeClass(color)
   setTimeout((e)=>{
    setMesagge('')
    setMesaggeClass('')
  },1000)
}

useEffect(()=>{
      if(id){ 
          myTeam({user:user.username, alignment:id.alignment})
          .then( response => {
          if(response == false){
                alerta('error', 'se permiten 6 heroes y 3 malos/buenos')
           } else {
                alerta('message', 'Heroe agregado')
                Database(userId, id.alignment, id.id)
           } 
        })
      }
},[id])

    const searchNone = ()=>{
        if(clase === 'search-form'){
            setClase('none')
        }
    }

      useEffect(()=>{
        setTitle(keyword)
        setClase('none')
         Search({keyword}).then( hero =>
             setHero(hero)
         )
     },[keyword])


    return (
        <>
          <Nav/>
          <div className="super-hero"  onClick={searchNone}> 
              <div className="inicio-superHero">
                  <p>Your super hero team</p>
              </div>
          </div>
         <div className="team" 
               onClick={searchNone}>
              <button 
                onClick={(e)=>setClase('search-form')} 
                className ="buscar">Search super Hero</button>
              <p className="team-super">
                  {title}
                  </p>
            <div>
              <div className={messageClass}>{message}</div>
         <div className="return-busqueda">
          {
            hero ?
            hero.map( hero =>{
               return <Card
                       biography={hero.biography}
                       appearance={hero.appearance}
                       power={[hero.powerstats]}
                       alignment = {hero.alignment}
                       id={hero.id}
                       setAgregar={setAgregar}
                       image={hero.image}
                       text={'Add hero'}
                       name={hero.name}
                    />
              })
                : " "
          }
                 </div>
             </div>
          </div>
          <div className={clase}>
              <ResultHero setSearch={setSearch}/>
          </div>
        </>
    )
}

export default SuperHero
