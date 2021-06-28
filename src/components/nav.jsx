import React, { Fragment, useEffect, useState } from "react"
import {Link} from "react-router-dom";
import {auth} from '../components/fire.js'
import { useHistory } from 'react-router-dom';

function Nav(){
  const [user, setUser] = useState(null)
  const [menu, setMenu] = useState('nav')
  const historial = useHistory()
  
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUser(user.email)
    }
  })
},[])

useEffect(()=>{
  if(user){
    historial.push('/SuperHero')
  }
},[])

const menuRes = ()=>{
  if(menu === 'nav'){
    setMenu('menu-res')
  }
  if(menu === 'menu-res'){
    setMenu('nav')
  }
}
const cerrarSesion = () =>{
  auth.signOut()
  setUser(null)
  historial.push('/')
}

  return (
    <div className="cont-nav">
          <button
          onClick={menuRes} 
          className="button-menu">
         <i class="fas fa-bars"></i>
         </button>
         <script src="https://kit.fontawesome.com/b90e9e4354.js" crossorigin="anonymous"></script>
     <nav className={menu} id="nav">
       <ul className="nav-ul">
       {
           user ?
             <button onClick = {cerrarSesion}  
           className="cerrar-sesion">Cerrar Sesion</button>
           : <li><Link className="link" to='/'>Inicio</Link></li>
         }
         {
            user ? <div>
                      <li><Link className="link" to='/SuperHero'>Search Hero</Link></li>
                      <li><Link className="link" to='/Team'>My Team</Link></li>
                  </div>
                 : " "
          }
                 </ul>
          </nav>
    </div>
  )
}
export default Nav;
