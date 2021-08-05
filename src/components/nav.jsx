import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import useAuth from './hooks/useAuth.jsx'

function Nav(){
  const [menu, setMenu] = useState('nav')
  const historial = useHistory()
  const auth = useAuth()

const menuRes = ()=>{
  if(menu === 'nav'){
    setMenu('menu-res')
  }
  if(menu === 'menu-res'){
    setMenu('nav')
  }
}
const cerrarSesion = () =>{
  auth.logout()
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
            auth.isLogged() ? 
                 <div>
                      <button onClick = {cerrarSesion}  
                      className="cerrar-sesion">Cerrar Sesion</button>
                      <li><Link className="link" to='/Team'>My Team</Link></li>
                      <li><Link className="link" to='/SuperHero'>Search</Link></li>
                  </div>
                    : <li><Link className="link" to='/'>Inicio</Link></li>

          }
                 </ul>
          </nav>
    </div>
  )
}
export default Nav;
