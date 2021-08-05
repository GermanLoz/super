import React, { Fragment, useState ,useEffect} from 'react'
import Nav from './components/nav.jsx'
import Login from './components/login.jsx'
import { useHistory } from 'react-router-dom';
import useAuth from './components/hooks/useAuth'


function Inicio() {
    let button = document.getElementById("reg")
    const historial = useHistory()
    const [style, setStyle] = useState('')
    const [mostrar, setMostrar] = useState('none')
    const [regis, setRegis] = useState(false)
    const [user, setUser] = useState(false)
    const [cerrarReg, setCerrarReg] = useState(false)

    const cerrarLog = ()=>{
        if(mostrar === 'block'){
            setMostrar('none')
        }
        if(cerrarReg == true){
            setCerrarReg(false)
           setRegis(false)

        }
    }
    const auth = useAuth()
    const login = (token) => {
        auth.login(token, user.email)
    }

    useEffect(()=>{
        if(user){
            const data = user.data
            let token
            data ? 
                token = data
                : token = " "
            if(token != " "){
                setStyle('none')
                historial.push('/SuperHero')
                login(token)
            } else {
                historial.push('/')
            }
        }
    },[user])

    if(regis == true){
        if(mostrar === 'block'){
           setMostrar('none')
        }
    }

    const mostrarLogin = ()=>{
        if(mostrar === 'none'){
        setMostrar('block')

        }
    }
    return (
        <div className={style}>
            <Fragment>
                <Nav></Nav>
            </Fragment>
            <Fragment>
            <div className={mostrar}>
                    <Login setUser={setUser}></Login>
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
