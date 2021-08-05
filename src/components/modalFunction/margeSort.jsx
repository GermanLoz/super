import React from 'react'

export default function MargeSort(Props) {
    const { obj } = Props

    let combatArr = []
    let durabilityArr = []
    let intelligenceArr = []
    let powerArr = []
    let speedArr = []
    let strengthArr = []

    let powers = {
        combat:combatArr,
        durability:durabilityArr,
        intelligence:intelligenceArr, 
        power:powerArr, speed:speedArr, 
        strenght:strengthArr
    }


    const elemento = obj.map( element => ({power:element.powerstats}))
    const data = elemento.map(item=>(item.power))
    data.pop()

    if(data != []){
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                const combat = parseInt(element.combat)
                const durability = parseInt(element.durability)
                const intelligence = parseInt(element.intelligence)
                const power = parseInt(element.power)
                const speed = parseInt(element.speed)
                const strength = parseInt(element.strength)
                combatArr.push(combat)
                durabilityArr.push(durability)
                intelligenceArr.push(intelligence)
                powerArr.push(power)
                speedArr.push(speed)
                strengthArr.push(strength)
                }
            }
        }
    return powers 
}

