import React, {useState, useEffect} from 'react'

export default function Card(Props) {
    const {text,image, name, setAgregar,id, team, power, appearance,biography, setDataDetalle} = Props
    const [detalle, setDetalle] = useState('')
    const [data, setData] = useState('')


    useEffect((e)=>{
        if(detalle){
            if(detalle == true){
                setDataDetalle([{text,image,name,id,power,appearance, biography}])
                setDetalle(false)            
            }
        } else {
            if(detalle == true){
              setDataDetalle(null)
            }            
        }
    },[detalle])

    return (
        <div key={id} className="hero-return">
            <button onClick={(e)=>setAgregar(e.target.name)}
            name={id}>{text}</button>
            <img src= {image.url}></img>
            <p>{name}</p>
            {
                team == true ?
                <div class="modal-card">
                        {
                          power ?
                          power.map( item =>{ 
                       return  <div className="powerstars">
                                    <p>Combat: {item.combat}</p>
                                    <p>Durability: {item.durability}</p>
                                    <p>Intelligence: {item.intelligence}</p>
                                    <p>Power: {item.power}</p>
                                    <p>Speed: {item.speed}</p>
                                    <p>Strength: {item.strength}</p>
                                </div>
                            })
                            : " "
                        }
                    <button
                        onClick={(e)=>{
                                   setDetalle(true)
                                    }
                                }
                        id="detalle">
                        Detalle</button> 
                </div>

                : " "
            }
        </div>
    )
}
