import React, { Fragment, useEffect, useState } from 'react'
import Nav from './components/nav.jsx'
import Search from './components/search.jsx'
import ResultHero from './components/resultHero.jsx'

function SuperHero() {
    const [clase, setClase] = useState('none')
    const [hero, setHero] = useState([])
    const[keyword, setSearch] = useState('Team')
    const[title, setTitle] = useState('Team')
    console.log(keyword)
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
          <div className="team"  onClick={searchNone}>
              <button onClick = {(e)=>setClase('search-form')} 
              className ="buscar">Search super Hero</button>
              <p className="team-super">{title}</p>
              <div>
         <div className="return-busqueda">
          {
              hero ?
              hero.map( hero =>{
       return <div class="hero-return">
                <button>Add Super Hero</button>
                <img src= {hero.image.url}></img>
                <p>{hero.name}</p>
             </div>
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
