import React, { Fragment, useState } from 'react'
import Nav from './components/nav.jsx'
import Login from './components/login.jsx'
import Register from './components/register.jsx'

function Inicio() {
    let button = document.getElementById("reg")
    const [mostrar, setMostrar] = useState('none')
    const [mostrarReg, setMostrarReg] = useState('none')
    const [regis, setRegis] = useState(false)
    const [cerrarReg, setCerrarReg] = useState(false)

    const cerrarLog = ()=>{
        if(mostrar === 'block'){
            setMostrar('none')
        }
        if(cerrarReg == true){
            setCerrarReg(false)
            setMostrarReg('none')
           setRegis(false)

        }
    }

    if(regis == true){
        if(mostrar === 'block'){
           setMostrar('none')
        }
        if(mostrarReg === 'none'){
           setMostrarReg('block')
           setCerrarReg(true)
        }
    }

    const mostrarLogin = ()=>{
        if(mostrar === 'none'){
        setMostrar('block')

        }
    }
    return (
        <div>
            <Fragment>
                <Nav></Nav>
            </Fragment>
            <Fragment>
            <div className={mostrar}>
                    <Login></Login>
                </div>
                <div className={mostrarReg}>
                    <Register></Register>
                </div>
            </Fragment>
            <div className="login-cont" onClick={cerrarLog}>
                <div className ="cont-title">
                <p className="titles">Create your team of super heroes. All the super heroes of your comics.</p>
                <button onClick={mostrarLogin} className="button-global">Login</button>
                </div>
            </div>
            {
                button ?
                button.addEventListener('click', (e)=>{
                    if(regis == false){ 
                    setRegis(true)
                    }
                }) : " "
            }
        </div>
    )
}

export default Inicio
