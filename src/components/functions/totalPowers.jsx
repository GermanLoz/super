import React from 'react'

export default function totalPowers(data) {
        let combatSum = data.combat.reduce((a, b) => a + b, 0);
        let durabilitySum = data.durability.reduce((a, b) => a + b, 0);
        let intelligenceSum = data.intelligence.reduce((a, b) => a + b, 0);
        let powerSum = data.power.reduce((a, b) => a + b, 0);
        let speedSum = data.speed.reduce((a, b) => a + b, 0);
        let strengthSum = data.strenght.reduce((a, b) => a + b, 0);
        let totalTeam = ([{combat:combatSum, durability:durabilitySum, intelligence:intelligenceSum, power:powerSum, speed:speedSum, strenght:strengthSum}])
    return totalTeam
}
