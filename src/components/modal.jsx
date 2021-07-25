import React, {useState, useEffect} from 'react'
import ModalData from './modalData.jsx'
import Card from './card.jsx'
import Delet from './delete'

export default function Modal(Props) {
    const{estado, setUp, card, user, setDet} = Props
    const[styleModal, setStyleModal] = useState('none')
    const [ides, setIdes] = useState([])
    const [delet, setDelet] = useState('')
    const [actualizar, setActualizar] = useState([])
    const [heroData, setHeroData] = useState([])
    const [response, setResponse] = useState([])
    const [message, setMesagge] = useState('')
    const [messageClass, setMesaggeClass] = useState('none')
    const [actualizarId, setIdActulizar] = useState([])
    const [dataDetalle, setDataDetalle] = useState([])
    const [dataAcutlizada, setDataActulizada] = useState([])
    console.log(heroData)

    if(estado == true && styleModal ==='none'){
        setStyleModal('modal')
    }
    if(estado == false && styleModal == 'modal'){
        setStyleModal('none')
    }

const alerta = ()=>{
    setMesagge('successfully added')
    setMesaggeClass('message')
    setTimeout((e)=>{
    setMesagge('')
    setMesaggeClass('')
    },1000)
}

useEffect(()=>{
    setHeroData([])
    const idesAct = actualizar.map( item => {
    const {heroId} = item
    const {id} = item
    return {heroId, id}
})

if(idesAct){ 
    setIdActulizar([...idesAct])
}
},[actualizar])

useEffect(()=>{
    if(actualizarId.length != 0){ 
        actualizarId.map(item =>(
        ModalData({item:item.heroId, docid:item.id})  
        .then(res =>(
            setDataActulizada(res, ...dataAcutlizada )
                ))
            ))
        }
},[actualizarId])

useEffect(()=>{
    setHeroData([...dataAcutlizada, ...heroData])
},[dataAcutlizada])

//Component delete superHero
useEffect(()=>{
    Delet({id:delet, setActualizar:setActualizar, user:user})
    if(delet.length != 0 ){ 
        alerta()
        }
},[delet])
//Agregar super heroes en array
    useEffect(()=>{
        setHeroData([response, ...heroData])
    },[response])

//setear ides en array
useEffect(()=>{
    const idesHero = card.map( item => {
    const {heroId} = item
    const {id} = item
    return {heroId, id}
})
if(idesHero){
    setIdes(...ides,idesHero)
    }
},[card])

useEffect(()=>{
    if(ides){ 
        ides.map(item =>(
        ModalData({item:item.heroId, docid:item.id})  
        .then(res =>(
            setResponse(...res)           
                ))
            ))
        }
},[ides])

useEffect(()=>{
    setDet(dataDetalle)
},[dataDetalle])


    return (
        <>
        <div className={styleModal} >
            <div className={messageClass}>{message}</div>
            <button
                onClick={(e)=>setUp(false)} 
                className="down-modal">
                <i class="fas fa-times"></i>
            </button>
            <div className="return-busqueda">
            {
            heroData ?
            heroData.map( heroData =>{
                if(Array.isArray(heroData)){
                    return " "
                }else{ 
               return <Card
                       setDataDetalle={setDataDetalle}
                       biography={heroData.biography}
                       appearance={heroData.appearance}
                       team={true}
                       power={[heroData.powerstats]}
                       id={heroData.docid}
                       setAgregar={setDelet}
                       image={heroData.image}
                       text={'Delete'}
                       name={heroData.name}
                    />
                }
              })
                : ''
          }
                 </div>
        </div>
        </>
    )
}
