import React, { Fragment, useEffect, useState } from "react"
import {Link} from "react-router-dom";
import {auth} from '../components/fire.js'
import { useHistory } from 'react-router-dom';

function Nav(){
  const [user, setUser] = useState(null)
  const historial = useHistory()

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUser(user.email)
      historial.push('/SuperHero')
    }
  })
},[])

const cerrarSesion = () =>{
  auth.signOut()
  setUser(null)
  historial.push('/')
}

  return (
    <div className="cont-nav">
         <script src="https://kit.fontawesome.com/b90e9e4354.js" crossorigin="anonymous"></script>
     <nav className="nav" id="nav">
       <ul className="nav-ul">
         {
           user ?
             <button onClick = {cerrarSesion}  
           className="cerrar-sesion">Cerrar Sesion</button>
           : <li><Link className="link" to='/'>Inicio</Link></li>
         }{
            user ? <div>
                      <li><Link className="link" to='/SuperHero'>Super Hero</Link></li>
                  </div>
                 : " "
          }
                 </ul>
          </nav>
    </div>
  )
}
export default Nav;
