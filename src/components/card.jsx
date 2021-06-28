import React from 'react'

export default function Card(Props) {
    const {text,image, name, setAgregar,id} = Props
   // console.log(id)
    return (
        <div key={id} className="hero-return">
            <button onClick={(e)=>setAgregar(e.target.name)}
            name={id}>{text}</button>
            <img src= {image.url}></img>
            <p>{name}</p>
        </div>
    )
}
